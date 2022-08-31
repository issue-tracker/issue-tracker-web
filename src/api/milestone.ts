import axios, { AxiosError } from 'axios';
import { MilestonesFormTypes } from '@/components/Molecules/EditMilestone';
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

export const createNewMilestone = async (milestoneData: MilestonesFormTypes) => {
  try {
    const { data } = await axios.post<MilestonesFormTypes>('api/milestones', milestoneData);
    return data;
  } catch (error) {
    const err = error as AxiosError;
    throw err;
  }
};
