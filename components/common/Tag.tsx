interface TagProps {
    name: string;
}
function Tag({ name }: TagProps) {
    return <span className="p-[0.5rem_1rem] rounded-full bg-tag text-[1.2rem]">{name}</span>;
}

export default Tag;
