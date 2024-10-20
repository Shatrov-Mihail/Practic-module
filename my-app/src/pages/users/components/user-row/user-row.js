import { Icon } from "../../../../components";
import styled from "styled-components";
import { useState } from "react";
import { useServerRequest } from "../../../../hooks";
import { TableRow } from "../table-row/table-row";

const UserRowContainer = ({
  className,
  id,
  login,
  registeredAt,
  roleId: userRoleId,
  roles,
	onUserRemove,
}) => {
  const [initialRoleId, setInitialRoleId] = useState(userRoleId);
  const [selectedRoleId, setSelectedRoleId] = useState(userRoleId);
  const requestServer = useServerRequest();

  const onRoleChange = ({ target }) => {
    setSelectedRoleId(Number(target.value));
  };

  const isSaveButtonDisabled = selectedRoleId === initialRoleId;

  const onRoleSave = (userId, newUserRoleId) => {
    requestServer("updateUserRole", userId, newUserRoleId).then(() => {
      setInitialRoleId(newUserRoleId);
    });
  };

  return (
    <div className={className}>
      <TableRow border={true}>
        <div className="login-column">{login}</div>
        <div className="registered-at-column">{registeredAt}</div>
        <div className="role-column">
          <select value={selectedRoleId} onChange={onRoleChange}>
            {roles.map(({ id: roleId, name: roleName }) => (
              <option key={roleId} value={roleId}>
                {roleName}
              </option>
            ))}
          </select>

          <Icon
			
            id="fa-floppy-o"
            margin="0 0 0 10px"
            disabled={isSaveButtonDisabled}
            onClick={() => onRoleSave(selectedRoleId, id)}
          />
        </div>
      </TableRow>
      <Icon id="fa-trash-o" margin="0 0 0 10px" onClick={onUserRemove} />
    </div>
  );
};

export const UserRow = styled(UserRowContainer)`
  display: flex;
  margin: 10px;

  & select {
    padding: 0 5px;
    font-size: 16px;
  }
`;
