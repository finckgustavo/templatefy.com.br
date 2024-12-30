import { profiles } from '../data/profiles';

export const generateNotificationScripts = (data: Record<string, string>) => {
  const discountValues = (data.discountValues || '10,20,30,40,50')
    .split(',')
    .map(v => v.trim())
    .filter(Boolean);

  return `
    const profiles = ${JSON.stringify(profiles)};
    const discounts = ${JSON.stringify(discountValues)};
    let notificationTimeout;
    let showingNotification = false;
    
    function showNotification() {
      if ('${data.showNotifications}' !== 'true') return;
      
      const notification = document.querySelector('.notification');
      const randomProfile = profiles[Math.floor(Math.random() * profiles.length)];
      const randomDiscount = discounts[Math.floor(Math.random() * discounts.length)];
      const template = '${data.notificationTemplate || '{name} acabou de ganhar {discount}% de desconto!'}';
      const message = template
        .replace('{name}', randomProfile.name)
        .replace('{discount}', randomDiscount);
      
      if (!showingNotification) {
        showingNotification = true;
        notification.innerHTML = \`
          <img src="\${randomProfile.image}" alt="\${randomProfile.name}" class="notification-avatar">
          <div class="notification-content">\${message}</div>
        \`;
        notification.classList.add('active');
        
        setTimeout(() => {
          notification.classList.remove('active');
          showingNotification = false;
          
          const minInterval = ${data.notificationMinInterval || 2} * 1000;
          const maxInterval = ${data.notificationMaxInterval || 5} * 1000;
          const randomInterval = Math.random() * (maxInterval - minInterval) + minInterval;
          
          notificationTimeout = setTimeout(showNotification, randomInterval);
        }, 3000);
      }
    }
    
    // Start notifications if enabled
    if ('${data.showNotifications}' === 'true') {
      setTimeout(showNotification, 2000);
    }`;
};