import { addLabelData, getLabelData, patchLabelData, deleteLabelData } from '@/api/labelList';
import { LabelTypes } from '@/types/issue';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const useFetchLabel = () => {
  const queryClient = useQueryClient();

  const useGetLabel = () => useQuery<LabelTypes[]>(['labels'], getLabelData);

  const { mutate: addLabel } = useMutation(addLabelData, {
    onSuccess: () => {
      queryClient.invalidateQueries(['labels']);
    },
  });

  const { mutate: replaceLabel } = useMutation(patchLabelData, {
    onSuccess: () => {
      queryClient.invalidateQueries(['labels']);
    },
  });

  const { mutate: deleteLabel } = useMutation(deleteLabelData, {
    onSuccess: () => {
      queryClient.invalidateQueries(['labels']);
    },
  });

  return {
    useGetLabel,
    addLabel,
    replaceLabel,
    deleteLabel,
  };
};

export default useFetchLabel;
