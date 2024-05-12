import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { apiSearchNovel, apiFilterGenre } from '~/apis';
import { Novel } from '~/models/Novel';
import { CardSearchList } from '~/components/CardSearchList.tsx';

export const SearchResult = () => {
  const [novels, setNovels] = useState<Novel[]>([]);
  const [totalPages, setTotalPages] = useState(0);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchSearchNovel = async (params: any) => {
      let result: any;

      if (params.server && params.keyword) {
        result = await apiSearchNovel({
          perPage: 6,
          page: params.page,
          ...params,
        });
      } else if (params.server && params.genre) {
        result = await apiFilterGenre({
          perPage: 6,
          page: params.page,
          ...params,
        });
      }
      if (result) {
        setNovels(result.data);
        setTotalPages(result.totalPages);
      }
    };

    const params = Object.fromEntries([...searchParams]);

    fetchSearchNovel(params);
  }, [searchParams]);

  return (
    <>
      <section className="novel-history text-app_primary p-5 bg-[#F8F8F8]">
        <div className="border-app_primary text-3xl font-semibold">Kết quả tìm kiếm: </div>
        <div className="novel-history p-3 mt-3">
          {novels && novels.length > 0 ? (
            <CardSearchList item={novels} totalCol={2} totalRow={3} totalPages={totalPages} />
          ) : (
            <div className="text-xl mx-auto text-center">Không tìm thấy kết quả ¯\_(ツ)_/¯</div>
          )}
        </div>
      </section>
    </>
  );
};
