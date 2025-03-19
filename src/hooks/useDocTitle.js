import { useEffect } from 'react';

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - Tani_Beatz`;
        } else {
            document.title = 'Tani_Beatz | The Perfect Clothing Brand Store';
        }
    }, [title]);

    return null;
};

export default useDocTitle;
