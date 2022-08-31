import axios, { AxiosError } from 'axios';
import { MilestoneListTypes } from '@/components/Organisms/MilestoneTable';

export const getMilestoneData = async () => {
  try {
    const { data } = await axios.get<MilestoneListTypes>('api/milestones');
    return data;
  } catch (error) {
    const err = error as AxiosError;
    throw err;
  }
};
