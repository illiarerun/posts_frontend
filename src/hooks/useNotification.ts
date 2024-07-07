import { notification } from 'antd';
import { IconType } from 'antd/es/notification/interface';
import { useCallback } from 'react';

interface NotificationArgs {
  message: string;
  description?: string;
  type?: IconType;
}

export const useNotification = () => {
  const [api] = notification.useNotification();
  const handleOpenNotification = useCallback(
    ({ message, description, type }: NotificationArgs) => {
      api.open({
        message,
        description,
        type,
      });
    },
    [api]
  );

  return {
    openNotification: handleOpenNotification,
  };
};
