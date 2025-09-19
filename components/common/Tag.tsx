import clsx from 'clsx';

interface TagProps {
    name: string;
    className?: string;
}
function Tag({ name, className }: TagProps) {
    return (
        <span
            className={clsx(
                'p-[0.5rem_1rem] rounded-full bg-tag text-[1.2rem] text-foreground',
                className,
            )}
        >
            {name}
        </span>
    );
}

export default Tag;
