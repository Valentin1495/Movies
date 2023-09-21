type Props = {
  icon: JSX.Element;
  msg: string;
};

export default function SkillIconBtn({ icon, msg }: Props) {
  return <button onClick={() => alert(msg)}>{icon}</button>;
}
