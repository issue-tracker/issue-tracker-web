import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getMilestoneData, createNewMilestone, patchMilestoneData } from '@/api/milestone';
import { MilestoneListTypes } from '@/components/Organisms/MilestoneTable';

const useFetchMilestone = () => {
  const queryClient = useQueryClient();

  const { data: milestoneData } = useQuery<MilestoneListTypes>(['milestones'], getMilestoneData, {
    useErrorBoundary: true,
  });

  const { mutate: createMilestoneMutate } = useMutation(createNewMilestone, {
    onSuccess: () => {
      queryClient.invalidateQueries(['milestones']);
    },
  });

  const { mutate: patchMilestoneDataMutate } = useMutation(patchMilestoneData, {
    onSuccess: () => {
      queryClient.invalidateQueries(['milestones']);
    },
  });

  return {
    milestoneData,
    createMilestoneMutate,
    patchMilestoneDataMutate,
  };
};

export default useFetchMilestone;
