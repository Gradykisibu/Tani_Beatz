import { useEffect } from 'react';

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - Tani_Beatz`;
        } else {
            document.title = 'Tani_Beatz | The Perfect Audio Store';
        }
    }, [title]);

    return null;
};

export default useDocTitle;
