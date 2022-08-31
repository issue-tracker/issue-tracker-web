import { useQuery } from '@tanstack/react-query';
import { getMilestoneData } from '@/api/milestone';
import { MilestoneListTypes } from '@/components/Organisms/MilestoneTable';

const useFetchMilestone = () => {
  const { data: milestoneData } = useQuery<MilestoneListTypes>(['milestones'], getMilestoneData, {
    useErrorBoundary: true,
  });

  return {
    milestoneData,
  };
};

export default useFetchMilestone;
