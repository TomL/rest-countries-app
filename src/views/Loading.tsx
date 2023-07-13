import { LoadingIcon } from '@/components/UI/icons';

export default function LoadingView() {
  return (
    <div className="flex justify-center items-center">
      <LoadingIcon className="animate-spin" />
    </div>
  );
}
