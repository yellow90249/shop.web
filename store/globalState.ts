import type { User } from '../types/productType';
import { getUserAPI } from '../api';

export const globalUserState = ref<User>({
  ID: 0,
  Email: '',
  Name: '',
  Password: '',
  AvatarURL: '',
  Role: '',
  CreatedAt: '',
  UpdatedAt: '',
  CartItems: [],
});

export async function setGlobalUserState() {
  const user = await getUserAPI();
  if (user.ID) {
    globalUserState.value = user;
  }
}

export async function clearGlobalUserState() {
  globalUserState.value = {
    ID: 0,
    Email: '',
    Name: '',
    Password: '',
    AvatarURL: '',
    Role: '',
    CreatedAt: '',
    UpdatedAt: '',
    CartItems: [],
  };
}
