import { LoadingIcon } from '@/components/UI/Icons';

export default function LoadingMessage() {
  return (
    <div className="flex justify-center items-center">
      <LoadingIcon className="animate-spin" />
    </div>
  );
}
