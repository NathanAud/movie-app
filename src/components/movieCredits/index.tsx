interface Props {
  title: string;
  names: string[];
}

export const CreditsDetail = ({ title, names }: Props) => {
  return <div className="flex flex-col gap-1">
    <h2 className="font-bold text-xl">{title}</h2>
    <p className="w-full">{names.join(', ')}</p>
  </div>
};
