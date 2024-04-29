import { Novel } from '~/models/Novel.tsx';
import { NovelCard } from '~/components/NovelCard.tsx';
import { NovelSearchCard } from '~/components/NovelSearchCard.tsx';

export type CardSearchListProps = {
  item: Novel[],
  totalRow?: number,
  totalCol?: number
}

export const CardSearchList = (props: CardSearchListProps) => {
  const { item, totalRow = 1, totalCol = 1 } = props;

  return (
    <div className="wrapper p-3 grid grid-cols-1 gap-4"> {/* Assumes 2 columns per row */}
      {Array.from({ length: totalRow }).map((_, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-2 gap-4"> {/* Assumes 2 columns per row */}
          {Array.from({ length: totalCol }).map((_, colIndex) => {
            const index = rowIndex * totalCol + colIndex;
            // if (index < item.length) {
            //   const novel = item[index];
            //
            // }
            return (
              <div key={index} className="col-span-1 p-3">
                {/* Render the item */}
                {<NovelSearchCard />}
              </div>
            );
            return null;
          })}
        </div>
      ))}
    </div>
  );
};