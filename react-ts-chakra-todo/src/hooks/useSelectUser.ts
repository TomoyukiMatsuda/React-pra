import { User } from "../types/api/user";
import { useCallback, useState } from "react";

interface Props {
  id: number;
  users: Array<User>;
  onOpen: () => void;
}

export const useSelectUser = () => {
  const [selectedUser, setSelectedUesr] = useState<User | null>(null);

  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    const targetUser = users.find((user) => user.id === id);

    setSelectedUesr(targetUser ?? null);
    onOpen();
  }, []);

  return { onSelectUser, selectedUser };
};
