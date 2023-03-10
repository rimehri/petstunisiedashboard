export type UserPayload = {
  roles: Roles;
};

export type Role = "ADMIN" | "USER";

export type Roles = Role[]