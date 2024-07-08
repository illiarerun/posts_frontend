import { notification } from 'antd';
import { IconType } from 'antd/es/notification/interface';
import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
} from 'react';

interface NotificationArgs {
  message: string;
  description?: string;
  type?: IconType;
}

interface NotificationContextType {
  open: (options: NotificationArgs) => void;
}

const NotificationContext = createContext<NotificationContextType>({
  open: () => {
    /*empty*/
  },
});

export const NotificationContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [api, contextHolder] = notification.useNotification();

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

  return (
    <NotificationContext.Provider
      value={{
        open: handleOpenNotification,
      }}
    >
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  );
};

export const useOpenNotification = () => {
  const { open } = useContext(NotificationContext);

  return open;
};
