import { toast } from 'react-hot-toast';

type Props = {
  icon: JSX.Element;
  msg: string;
};

export default function SkillIconBtn({ icon, msg }: Props) {
  return (
    <button
      onClick={() =>
        toast.success(msg, {
          style: {
            border: '1px solid #713200',
            padding: '16px',
            color: '#713200',
          },
          iconTheme: {
            primary: '#713200',
            secondary: '#FFFAEE',
          },
        })
      }
    >
      {icon}
    </button>
  );
}
