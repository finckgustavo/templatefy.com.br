export const generateNotificationStyles = (data: Record<string, string>) => `
.notification {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px;
  background: ${data.notificationBgColor || '#fff'};
  color: ${data.notificationTextColor || '#000'};
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 400px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.notification.active {
  opacity: 1;
  visibility: visible;
  bottom: 30px;
}

.notification-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  background: #f3f4f6;
}

.notification-content {
  flex: 1;
  text-align: left;
}`;