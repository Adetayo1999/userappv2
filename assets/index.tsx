type SVGProps = {
    scale?: number;
};

type NavigationIconType = SVGProps & {
    color?: string;
    active?: boolean;
    activeColor?: string;
};

export const SafelybuyLogo = ({ scale }: SVGProps) => {
    return (
        <svg
            width={scale! * 162}
            height={scale! * 42}
            viewBox='0 0 162 49'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M27.2842 10.1598L23.3651 20.2947L18.9966 13.5298H12.4813C10.4843 13.5298 8.71195 14.5782 7.76336 16.3506C6.81478 18.1229 6.91463 20.1699 8.03796 21.8424L11.6575 27.2842C11.8323 27.5339 11.6576 27.8584 11.358 27.8584H3.91911L2.39638 25.5868C-0.174779 21.7425 -0.324555 16.7749 2.02194 12.7809C4.21866 9.0365 8.28758 6.7649 12.6311 6.7649H14.6281L10.2596 0L27.2842 10.1598Z'
                fill='#8661FF'
            />
            <path
                d='M0 38.0184L3.91915 27.8835L8.28762 34.6484H14.7779C16.7749 34.6484 18.5473 33.6 19.4959 31.8276C20.4445 30.0553 20.3446 28.0083 19.2213 26.3358L15.6017 20.894C15.427 20.6443 15.6017 20.3198 15.9012 20.3198H23.3401L24.8629 22.5914C27.434 26.4357 27.5838 31.4033 25.2373 35.3973C23.0406 39.1417 18.9717 41.4133 14.6281 41.4133H12.6311L16.9996 48.1782L0 38.0184Z'
                fill='#4BBF75'
            />
            <path
                d='M51.5389 31.2079C49.7207 31.2079 48.1859 30.8162 46.958 30.0099C45.7065 29.2266 44.8328 28.1438 44.3369 26.7615L47.4302 24.9876C48.1386 26.8076 49.5554 27.7291 51.657 27.7291C52.6724 27.7291 53.4044 27.5448 53.8766 27.1992C54.3489 26.8537 54.585 26.3929 54.585 25.84C54.585 25.2179 54.3017 24.7111 53.7114 24.3655C53.1446 24.02 52.1057 23.6283 50.618 23.2367C49.7916 23.0063 49.1068 22.7529 48.5401 22.5225C47.9733 22.2921 47.4066 21.9696 46.8399 21.5549C46.2732 21.1632 45.8482 20.6564 45.5412 20.0343C45.2342 19.4123 45.0925 18.6981 45.0925 17.8918C45.0925 16.2791 45.6829 14.989 46.8635 14.0214C48.0442 13.0537 49.461 12.5699 51.1375 12.5699C52.6251 12.5699 53.9239 12.9155 55.0573 13.6297C56.1907 14.3439 57.0644 15.3345 57.702 16.5786L54.6559 18.2834C53.9239 16.7399 52.7432 15.9796 51.1375 15.9796C50.3819 15.9796 49.7916 16.1409 49.3665 16.4865C48.9415 16.809 48.729 17.2467 48.729 17.7766C48.729 18.3295 48.9651 18.7903 49.461 19.1359C49.9332 19.4814 50.8542 19.8731 52.2237 20.2647C52.7904 20.426 53.2155 20.5642 53.4988 20.6564C53.7822 20.7485 54.1836 20.8868 54.6795 21.0941C55.1754 21.3014 55.5532 21.4627 55.8365 21.647C56.0963 21.8083 56.4269 22.0387 56.7575 22.3382C57.1117 22.6377 57.3714 22.9372 57.5603 23.2367C57.7492 23.5362 57.8909 23.9048 58.0326 24.3425C58.1742 24.7802 58.2215 25.241 58.2215 25.7709C58.2215 27.4296 57.6075 28.7428 56.3796 29.7104C55.1281 30.7241 53.5224 31.2079 51.5389 31.2079Z'
                fill='#8661FF'
            />
            <path
                d='M70.5001 18.0531H73.9004V30.8624H70.5237V29.3418C69.5083 30.5859 68.0915 31.2079 66.2497 31.2079C64.5023 31.2079 62.9911 30.5629 61.7396 29.2497C60.4881 27.9365 59.8741 26.3469 59.8741 24.4577C59.8741 22.5686 60.4881 20.9559 61.7396 19.6658C62.9911 18.3526 64.4787 17.7075 66.2497 17.7075C68.0915 17.7075 69.5083 18.3296 70.5237 19.5736V18.0531H70.5001ZM64.2662 27.0611C64.951 27.7292 65.8247 28.0747 66.8636 28.0747C67.9026 28.0747 68.7763 27.7292 69.4847 27.0611C70.1695 26.3929 70.5237 25.5175 70.5237 24.4577C70.5237 23.398 70.1695 22.5225 69.4847 21.8544C68.7999 21.1863 67.9262 20.8407 66.8636 20.8407C65.8247 20.8407 64.951 21.1863 64.2662 21.8544C63.5814 22.5225 63.2508 23.398 63.2508 24.4577C63.2508 25.5175 63.5814 26.3929 64.2662 27.0611Z'
                fill='#8661FF'
            />
            <path
                d='M77.6552 17.9148C76.6162 18.8594 76.0967 20.2186 76.0967 22.0387V35.9999H79.4734V22.0387C79.4734 20.449 80.3943 19.7348 82.2597 19.85V16.6708C80.229 16.5556 78.6941 16.9703 77.6552 17.9148Z'
                fill='#8661FF'
            />
            <path
                d='M93.5688 26.9462C92.9076 27.7986 91.9159 28.2363 90.6408 28.2363C88.7045 28.2363 87.5002 27.4991 87.0043 26.0247H83.5568C83.8166 27.2918 84.4305 28.3976 85.375 29.3191C86.6974 30.6093 88.4211 31.2313 90.5935 31.2313C93.1202 31.2313 95.0328 30.3098 96.3079 28.4898L93.5688 26.9462ZM95.0801 19.6431C93.8286 18.3529 92.2465 17.6848 90.3102 17.6848C88.2794 17.6848 86.6265 18.3299 85.3278 19.62C84.3833 20.5416 83.7929 21.6474 83.5332 22.9145H86.9571C87.1696 22.2464 87.5238 21.7165 88.0433 21.3249C88.6337 20.8641 89.3893 20.6567 90.3102 20.6567C91.0894 20.6567 91.7742 20.8641 92.3645 21.3018C92.884 21.6704 93.2618 22.2234 93.4744 22.9145H96.8038C96.5677 21.6704 96.001 20.5876 95.0801 19.6431Z'
                fill='#8661FF'
            />
            <path
                d='M98.2444 30.8625V12.1785H101.621V30.8625H98.2444Z'
                fill='#8661FF'
            />
            <path
                d='M113.286 18.053H116.899L112.106 30.8853C111.421 32.7053 110.523 34.0415 109.39 34.8709C108.257 35.7003 106.863 36.0689 105.187 35.9768V32.9127C106.108 32.9357 106.816 32.7514 107.359 32.3598C107.902 31.9681 108.327 31.3461 108.634 30.4706L103.251 18.076H106.958L110.382 26.6693L113.286 18.053Z'
                fill='#8661FF'
            />
            <path
                d='M126.604 17.7078C128.375 17.7078 129.886 18.3528 131.137 19.666C132.389 20.9792 133.003 22.5688 133.003 24.458C133.003 26.3471 132.365 27.9598 131.137 29.2499C129.886 30.5631 128.375 31.2082 126.604 31.2082C124.762 31.2082 123.345 30.5862 122.353 29.3421V30.8626H118.977V12.9388H122.353V19.5739C123.345 18.3298 124.762 17.7078 126.604 17.7078ZM123.369 27.0613C124.053 27.7294 124.927 28.075 125.966 28.075C127.005 28.075 127.879 27.7294 128.587 27.0613C129.272 26.3932 129.626 25.5177 129.626 24.458C129.626 23.3982 129.272 22.5228 128.587 21.8547C127.902 21.1865 127.029 20.841 125.966 20.841C124.904 20.841 124.053 21.1865 123.369 21.8547C122.684 22.5228 122.353 23.3982 122.353 24.458C122.353 25.5177 122.684 26.3932 123.369 27.0613Z'
                fill='#8661FF'
            />
            <path
                d='M143.582 18.053H146.959V30.8623H143.582V29.4339C142.756 30.6319 141.457 31.2309 139.662 31.2309C138.222 31.2309 137.041 30.7701 136.097 29.8255C135.152 28.881 134.703 27.5908 134.703 25.9321V18.076H138.08V25.5174C138.08 26.3698 138.316 27.0149 138.789 27.4756C139.261 27.9364 139.898 28.1437 140.678 28.1437C141.551 28.1437 142.26 27.8903 142.779 27.3604C143.299 26.8306 143.558 26.0473 143.558 24.9875V18.053H143.582Z'
                fill='#8661FF'
            />
            <path
                d='M158.387 18.053H162L157.207 30.8853C156.522 32.7053 155.625 34.0415 154.491 34.8709C153.358 35.7003 151.965 36.0689 150.288 35.9768V32.9127C151.209 32.9357 151.917 32.7514 152.46 32.3598C153.004 31.9681 153.429 31.3461 153.736 30.4706L148.352 18.076H152.059L155.483 26.6693L158.387 18.053Z'
                fill='#8661FF'
            />
            <path
                d='M96.9692 24.4577C96.9692 24.8954 96.8748 25.5174 96.7803 26.0012H83.557C83.4625 25.5174 83.3917 24.9875 83.3917 24.4577C83.3917 23.9278 83.4389 23.4209 83.557 22.9371H96.8276C96.922 23.4209 96.9692 23.9278 96.9692 24.4577Z'
                fill='#8661FF'
            />
            <path
                d='M83.3918 24.4577C83.3918 25.0106 83.439 25.5174 83.557 26.0012H76.8745V22.9371H83.557C83.439 23.4209 83.3918 23.9278 83.3918 24.4577Z'
                fill='#8661FF'
            />
        </svg>
    );
};

SafelybuyLogo.defaultProps = {
    scale: 1,
};

export const TradeIcon = ({
    scale,
    color,
    active,
    activeColor,
}: NavigationIconType) => (
    <svg
        width={scale! * 35}
        height={scale! * 35}
        className='transition duration-300'
        viewBox='0 0 35 35'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <mask
            id='mask0_153_2091'
            // style='mask-type:alpha'
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='35'
            height='35'>
            <rect width='35' height='35' fill='#D9D9D9' />
        </mask>
        <g mask='url(#mask0_153_2091)'>
            <path
                d='M26.25 33.5417V29.1667H21.875V26.25H26.25V21.875H29.1667V26.25H33.5417V29.1667H29.1667V33.5417H26.25ZM2.91671 29.1667V20.4167H1.45837V17.5L2.91671 10.2084H24.7917L26.25 17.5V20.4167H24.7917V24.7917H21.875V20.4167H16.0417V29.1667H2.91671ZM5.83337 26.25H13.125V20.4167H5.83337V26.25ZM2.91671 8.75004V5.83337H24.7917V8.75004H2.91671ZM4.44796 17.5H23.2605L22.3855 13.125H5.32296L4.44796 17.5Z'
                fill={active ? activeColor! : color!}
            />
        </g>
    </svg>
);

TradeIcon.defaultProps = {
    color: "#1C1B1F",
    active: false,
    scale: 1,
    activeColor: "#8661FF",
};

export const FoodIcon = ({
    scale,
    color,
    active,
    activeColor,
}: NavigationIconType) => (
    <svg
        width={scale! * 30}
        height={scale! * 30}
        className='transition duration-300'
        viewBox='0 0 30 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <g clipPath='url(#clip0_153_2066)'>
            <path
                d='M27.3 21.817C28.4588 19.732 29.0655 17.3854 29.0625 15C29.0625 7.23376 22.7663 0.937511 15 0.937511C12.615 0.934556 10.2687 1.54108 8.18392 2.69954L7.15314 1.66923C6.68402 1.20099 6.04829 0.938012 5.38548 0.938012C4.72267 0.938012 4.08694 1.20099 3.61782 1.66923L1.66876 3.61735C1.20049 4.08655 0.937503 4.72236 0.937503 5.38525C0.937503 6.04813 1.20049 6.68394 1.66876 7.15314L2.69954 8.18392C1.54108 10.2687 0.934556 12.615 0.937511 15C0.937511 22.7663 7.23282 29.0625 15 29.0625C17.3851 29.0655 19.7314 28.4588 21.8161 27.3L22.8469 28.3308C23.3161 28.7991 23.9519 29.0621 24.6148 29.0621C25.2777 29.0621 25.9135 28.7991 26.3827 28.3308L28.3308 26.3827C28.7991 25.9135 29.0621 25.2777 29.0621 24.6148C29.0621 23.9519 28.7991 23.3161 28.3308 22.8469L27.3 21.817ZM3.14157 5.67985C3.06366 5.60151 3.01992 5.49551 3.01992 5.38501C3.01992 5.27452 3.06366 5.16851 3.14157 5.09017L5.09064 3.1411C5.16884 3.0631 5.27479 3.0193 5.38525 3.0193C5.4957 3.0193 5.60165 3.0631 5.67985 3.1411L6.40876 3.87048C5.4584 4.60545 4.60545 5.4584 3.87048 6.40876L3.14157 5.67985ZM15 25.9866C8.93298 25.9866 4.01392 21.068 4.01392 15C4.01392 8.93251 8.93298 4.01392 15 4.01392C21.067 4.01392 25.9866 8.93251 25.9866 15C25.9866 21.068 21.067 25.9866 15 25.9866ZM26.8589 24.9099L24.9089 26.8589C24.8307 26.9368 24.7249 26.9805 24.6145 26.9805C24.5042 26.9805 24.3984 26.9368 24.3202 26.8589L23.5913 26.1291C24.5417 25.3945 25.3945 24.5417 26.1291 23.5913L26.8589 24.3202C26.9368 24.3985 26.9806 24.5045 26.9806 24.615C26.9806 24.7255 26.9368 24.8315 26.8589 24.9099Z'
                fill={active ? activeColor : color!}
                fillOpacity='0.85'
            />
            <path
                d='M19.4827 14.5472C20.7863 17.2908 21.3942 18.2063 23.7272 16.3201C26.0583 14.4352 27.1392 9.8785 18.5592 5.3199C16.2263 4.08053 12.4992 6.4285 12.9197 8.40662C13.3411 10.3857 18.1814 11.8046 19.4827 14.5472ZM23.7398 12.2729C25.3317 12.2729 22.762 13.1452 21.2302 14.468C20.4877 15.1093 20.8448 12.2729 23.7398 12.2729ZM21.6155 8.76147C23.2083 8.76147 20.6386 9.6324 19.1067 10.9562C18.3666 11.5965 18.7191 8.76147 21.6155 8.76147ZM18.1908 6.47397C19.7822 6.47397 17.212 7.34631 15.683 8.66725C14.9395 9.3085 15.2948 6.47397 18.1908 6.47397ZM19.8759 20.1418C17.9733 21.4951 16.8061 23.0982 17.2631 23.7244C18.0863 24.856 18.0863 24.856 21.5297 22.4054C23.4295 21.054 24.5995 19.449 24.1425 18.8237C23.3156 17.6926 23.3156 17.6926 19.8759 20.1418ZM19.943 19.5216C20.8111 19.5554 20.2697 18.7501 20.3695 17.7362C20.4675 16.7218 19.6425 17.2416 18.0881 17.1512C16.5319 17.0607 16.9842 18.2855 17.047 19.2643C17.1103 20.2426 17.708 19.4387 19.943 19.5216Z'
                fill={active ? activeColor : color!}
                fillOpacity='0.85'
            />
            <path
                d='M14.2364 20.2763C13.7058 19.9458 13.2572 19.4944 12.8578 18.9853C13.2178 19.1311 13.6551 19.215 14.108 19.3013C14.3044 19.3388 14.5008 19.3763 14.6864 19.4185C14.8894 19.4653 15.0464 19.4869 15.18 19.4869C15.9084 19.4869 15.9881 18.8691 16.0359 18.4993C16.079 18.165 16.1386 17.7066 16.4386 17.1014C16.5961 16.7818 16.5417 16.5403 16.4681 16.3936C16.275 16.0055 15.8175 15.9183 15.239 15.8086C14.9165 15.7472 14.5509 15.6779 14.1872 15.5522C13.9237 15.4613 13.7161 15.4191 13.5328 15.4191C12.8306 15.4191 12.6558 16.0079 12.5278 16.4372C12.4537 16.6861 12.3698 16.9693 12.2044 17.2796C12.1221 17.4314 12.066 17.5961 12.0384 17.7666C10.9828 15.9778 10.2408 13.9932 8.9892 13.5324C8.96014 13.5221 8.92967 13.5188 8.90061 13.5099C8.92124 13.4644 8.93436 13.4236 8.9578 13.3763C9.1153 13.0571 9.06092 12.8152 8.98733 12.6685C8.8392 12.3713 8.53592 12.2508 8.14264 12.1613C8.59967 11.7305 9.20436 11.0949 10.0622 10.1902C10.1292 10.1199 10.192 10.0496 10.2562 9.97879C10.207 10.1044 10.1484 10.2361 10.0748 10.373C9.82077 10.8493 9.96092 11.1347 10.2937 11.3269C10.0598 11.3996 9.89155 11.5172 9.81514 11.6869C9.1917 13.0716 9.1917 13.0716 13.3233 14.9991C15.6028 16.0632 17.7323 16.3055 18.0778 15.5419C18.7022 14.1539 18.7022 14.1539 14.5697 12.2283C14.0543 11.9865 13.5232 11.7795 12.9801 11.6086C13.0589 11.2796 13.0298 10.6636 13.4765 9.76504C13.7887 9.13129 12.6647 9.27051 11.4928 8.86785C11.385 8.83035 11.2931 8.80691 11.2097 8.7891C12.0562 7.56848 12.398 6.49129 11.9784 6.10129C10.9322 5.13144 10.9322 5.13144 7.97014 8.25191C6.74202 9.54473 5.96342 10.8905 5.89217 11.7113C5.32639 11.7966 5.16514 12.3183 5.04795 12.7116C4.97389 12.961 4.88999 13.2436 4.72452 13.5544C4.51077 13.9552 4.47983 14.3199 4.63264 14.6386C4.77655 14.9386 5.04795 15.1285 5.38827 15.2644C4.88202 16.05 4.65889 16.9749 5.00436 17.8243C8.33483 26.018 13.1292 25.9074 15.3961 24.2405C17.6644 22.5741 16.8258 21.8874 14.2364 20.2763ZM6.28217 18.4093C6.71905 15.9183 9.65389 16.1232 8.8903 16.6449C7.31577 17.7249 6.03983 19.7771 6.28217 18.4093ZM10.4855 19.5089C8.91092 20.5885 7.63639 22.6393 7.87733 21.2733C8.31561 18.78 11.25 18.9853 10.4855 19.5089ZM13.3172 21.6038C11.7426 22.6833 10.469 24.735 10.709 23.3691C11.1483 20.8768 14.0808 21.0821 13.3172 21.6038Z'
                fill={active ? activeColor : color!}
                fillOpacity='0.85'
            />
        </g>
        <defs>
            <clipPath id='clip0_153_2066'>
                <rect width='30' height='30' fill='white' />
            </clipPath>
        </defs>
    </svg>
);

FoodIcon.defaultProps = {
    color: "#06192D",
    active: false,
    scale: 1,
    activeColor: "#8661FF",
};

export const TicketIcon = ({
    scale,
    color,
    active,
    activeColor,
}: NavigationIconType) => (
    <svg
        width={scale! * 32}
        height={scale! * 24}
        className='transition duration-300'
        viewBox='0 0 32 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M22.2813 3.25V4.34375M22.2813 8.71875V9.8125M22.2813 14.1875V15.2813M22.2813 19.6563V20.75M9.15625 13.0938H16.8125M9.15625 16.375H13.5313M3.14063 2.15625C2.235 2.15625 1.5 2.89125 1.5 3.79688V8.20979C2.16609 8.5933 2.71935 9.14557 3.10405 9.81097C3.48875 10.4764 3.6913 11.2314 3.6913 12C3.6913 12.7686 3.48875 13.5236 3.10405 14.189C2.71935 14.8544 2.16609 15.4067 1.5 15.7902V20.2031C1.5 21.1088 2.235 21.8438 3.14063 21.8438H28.2969C29.2025 21.8438 29.9375 21.1088 29.9375 20.2031V15.7902C29.2714 15.4067 28.7182 14.8544 28.3335 14.189C27.9488 13.5236 27.7462 12.7686 27.7462 12C27.7462 11.2314 27.9488 10.4764 28.3335 9.81097C28.7182 9.14557 29.2714 8.5933 29.9375 8.20979V3.79688C29.9375 2.89125 29.2025 2.15625 28.2969 2.15625H3.14063Z'
            stroke={active ? activeColor : color!}
            strokeOpacity='0.85'
            strokeWidth='2.6'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);

TicketIcon.defaultProps = {
    color: "#06192D",
    active: false,
    scale: 1,
    activeColor: "#8661FF",
};

export const ArrowDown = ({ scale }: SVGProps) => {
    return (
        <svg
            width={scale! * 12}
            height={scale! * 12}
            viewBox='0 0 12 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M7.41675 6.08869L7.41675 -10.9255H4.58342L4.58342 6.08869H0.333415L6.00008 11.7412L11.6667 6.08869H7.41675Z'
                fill='black'
            />
        </svg>
    );
};

ArrowDown.defaultProps = {
    scale: 1,
};

export const MicrophoneIcon = ({ scale }: SVGProps) => (
    <svg
        width={scale! * 125}
        height={scale! * 234}
        viewBox='0 0 125 234'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M125.744 37.3368C117.992 21.6478 104.325 9.68078 87.7502 4.0684C71.175 -1.54399 53.0491 -0.342028 37.3602 7.40985C21.6712 15.1617 9.70417 28.8286 4.09179 45.4038C-1.52059 61.979 -0.318633 80.1048 7.43325 95.7938L7.7487 96.5787L8.18048 97.3061C15.955 112.677 29.4558 124.38 45.7751 129.894C48.005 130.667 50.2788 131.308 52.5846 131.812L119.218 226.834C121.233 229.71 124.212 231.769 127.615 232.637C131.018 233.505 134.619 233.124 137.765 231.564L154.401 223.344C157.552 221.793 160.042 219.164 161.421 215.934C162.799 212.704 162.973 209.086 161.912 205.738L126.921 95.0827C127.922 92.9449 128.794 90.7497 129.535 88.5086C135.07 72.1966 133.977 54.3631 126.491 38.8491L126.176 38.0642L125.744 37.3368ZM83.4412 18.6538C93.9511 22.1983 103.016 29.0773 109.259 38.2452L18.1702 83.252C15.1839 74.1906 14.7841 64.4759 17.0159 55.1998C19.2477 45.9237 24.0225 37.4539 30.8038 30.7426C37.585 24.0313 46.1037 19.3444 55.4025 17.2088C64.7012 15.0733 74.4113 15.5737 83.4412 18.6538ZM147.906 210.199L131.27 218.418L71.583 133.208C88.878 131.974 105 124.008 116.488 111.021L147.906 210.199ZM50.4834 115.989C39.9734 112.445 30.9082 105.566 24.6655 96.3976L115.754 51.3909C118.741 60.4523 119.14 70.167 116.909 79.4431C114.677 88.7192 109.902 97.1889 103.121 103.9C96.3396 110.612 87.8208 115.298 78.5221 117.434C69.2234 119.57 59.5133 119.069 50.4834 115.989ZM102.772 139.797C104.532 138.938 106.561 138.808 108.416 139.436C110.271 140.065 111.803 141.4 112.68 143.152L119.577 157.112C120.412 158.876 120.529 160.895 119.903 162.744C119.277 164.592 117.957 166.125 116.223 167.019C114.462 167.878 112.434 168.008 110.579 167.38C108.724 166.751 107.191 165.416 106.315 163.664L99.4176 149.704C98.5584 147.944 98.4288 145.916 99.0569 144.061C99.6851 142.205 101.02 140.673 102.772 139.797Z'
            fill='#8661FF'
            fillOpacity='0.05'
        />
    </svg>
);

export const ArrowRight = ({
    active,
    color,
    scale,
    activeColor,
}: NavigationIconType) => {
    return (
        <svg
            width={16 * scale!}
            height={8 * scale!}
            viewBox='0 0 16 8'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M12.01 3H0V5H12.01V8L16 4L12.01 0V3Z'
                fill={active ? activeColor : color!}
            />
        </svg>
    );
};

ArrowRight.defaultProps = {
    scale: 1,
    color: "black",
    active: false,
    activeColor: "#ffffff",
};

export const InstagramIcon = ({ scale }: SVGProps) => (
    <svg
        width={scale! * 22}
        height={scale! * 22}
        viewBox='0 0 22 22'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <g clipPath='url(#clip0_283_503)'>
            <path
                d='M11 8.25004C10.2707 8.25004 9.57122 8.53977 9.0555 9.0555C8.53977 9.57122 8.25004 10.2707 8.25004 11C8.25004 11.7294 8.53977 12.4289 9.0555 12.9446C9.57122 13.4603 10.2707 13.75 11 13.75C11.7294 13.75 12.4289 13.4603 12.9446 12.9446C13.4603 12.4289 13.75 11.7294 13.75 11C13.75 10.2707 13.4603 9.57122 12.9446 9.0555C12.4289 8.53977 11.7294 8.25004 11 8.25004ZM11 6.41671C12.2156 6.41671 13.3814 6.89959 14.2409 7.75913C15.1005 8.61868 15.5834 9.78447 15.5834 11C15.5834 12.2156 15.1005 13.3814 14.2409 14.2409C13.3814 15.1005 12.2156 15.5834 11 15.5834C9.78447 15.5834 8.61868 15.1005 7.75913 14.2409C6.89959 13.3814 6.41671 12.2156 6.41671 11C6.41671 9.78447 6.89959 8.61868 7.75913 7.75913C8.61868 6.89959 9.78447 6.41671 11 6.41671V6.41671ZM16.9584 6.18754C16.9584 6.49143 16.8377 6.78288 16.6228 6.99777C16.4079 7.21265 16.1164 7.33337 15.8125 7.33337C15.5086 7.33337 15.2172 7.21265 15.0023 6.99777C14.7874 6.78288 14.6667 6.49143 14.6667 6.18754C14.6667 5.88365 14.7874 5.5922 15.0023 5.37731C15.2172 5.16243 15.5086 5.04171 15.8125 5.04171C16.1164 5.04171 16.4079 5.16243 16.6228 5.37731C16.8377 5.5922 16.9584 5.88365 16.9584 6.18754V6.18754ZM11 3.66671C8.73221 3.66671 8.36187 3.67312 7.30679 3.71987C6.58812 3.75379 6.10596 3.85004 5.65862 4.02421C5.26079 4.17821 4.97387 4.36246 4.66862 4.66862C4.38171 4.94582 4.16111 5.28424 4.02329 5.65862C3.84912 6.10779 3.75287 6.58904 3.71987 7.30679C3.67221 8.31879 3.66671 8.67262 3.66671 11C3.66671 13.2679 3.67312 13.6382 3.71987 14.6933C3.75379 15.411 3.85004 15.8941 4.02329 16.3405C4.17912 16.7393 4.36246 17.0262 4.66679 17.3305C4.97571 17.6385 5.26262 17.8228 5.65679 17.975C6.10962 18.15 6.59179 18.2472 7.30679 18.2802C8.31879 18.3279 8.67262 18.3334 11 18.3334C13.2679 18.3334 13.6382 18.327 14.6933 18.2802C15.4101 18.2463 15.8932 18.15 16.3405 17.9768C16.7375 17.8219 17.0262 17.6376 17.3305 17.3333C17.6395 17.0244 17.8237 16.7375 17.9759 16.3433C18.15 15.8914 18.2472 15.4083 18.2802 14.6933C18.3279 13.6813 18.3334 13.3275 18.3334 11C18.3334 8.73221 18.327 8.36187 18.2802 7.30679C18.2463 6.58996 18.15 6.10596 17.9759 5.65862C17.8377 5.28463 17.6175 4.94634 17.3315 4.66862C17.0544 4.38157 16.7159 4.16094 16.3415 4.02329C15.8923 3.84912 15.4101 3.75287 14.6933 3.71987C13.6813 3.67221 13.3275 3.66671 11 3.66671ZM11 1.83337C13.4906 1.83337 13.8014 1.84254 14.7785 1.88837C15.7548 1.93421 16.4194 2.08729 17.0042 2.31462C17.6092 2.54746 18.1189 2.86279 18.6285 3.37154C19.0947 3.82978 19.4553 4.38408 19.6855 4.99587C19.9119 5.57979 20.0659 6.24529 20.1117 7.22154C20.1548 8.19871 20.1667 8.50946 20.1667 11C20.1667 13.4906 20.1575 13.8014 20.1117 14.7785C20.0659 15.7548 19.9119 16.4194 19.6855 17.0042C19.456 17.6163 19.0952 18.1708 18.6285 18.6285C18.1702 19.0945 17.6159 19.4551 17.0042 19.6855C16.4203 19.9119 15.7548 20.0659 14.7785 20.1117C13.8014 20.1548 13.4906 20.1667 11 20.1667C8.50946 20.1667 8.19871 20.1575 7.22154 20.1117C6.24529 20.0659 5.58071 19.9119 4.99587 19.6855C4.38384 19.4558 3.82944 19.0951 3.37154 18.6285C2.90533 18.1704 2.54464 17.6161 2.31462 17.0042C2.08729 16.4203 1.93421 15.7548 1.88837 14.7785C1.84529 13.8014 1.83337 13.4906 1.83337 11C1.83337 8.50946 1.84254 8.19871 1.88837 7.22154C1.93421 6.24437 2.08729 5.58071 2.31462 4.99587C2.54401 4.38371 2.90478 3.82925 3.37154 3.37154C3.82957 2.90517 4.38393 2.54446 4.99587 2.31462C5.58071 2.08729 6.24437 1.93421 7.22154 1.88837C8.19871 1.84529 8.50946 1.83337 11 1.83337Z'
                fill='black'
            />
        </g>
        <defs>
            <clipPath id='clip0_283_503'>
                <rect width='22' height='22' fill='white' />
            </clipPath>
        </defs>
    </svg>
);

InstagramIcon.defaultProps = {
    scale: 1,
};

export const TwitterIcon = ({ scale }: SVGProps) => (
    <svg
        width={scale! * 22}
        height={scale! * 22}
        viewBox='0 0 22 22'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <g clipPath='url(#clip0_283_678)'>
            <path
                d='M14.0251 5.08744C13.3284 5.08733 12.6595 5.36072 12.1623 5.8488C11.6651 6.33687 11.3795 7.00061 11.3667 7.69719L11.3411 9.14094C11.3396 9.21846 11.3217 9.29478 11.2886 9.36491C11.2555 9.43503 11.208 9.49737 11.1491 9.54783C11.0903 9.5983 11.0214 9.63575 10.9471 9.65772C10.8727 9.6797 10.7946 9.68571 10.7177 9.67536L9.28681 9.48103C7.40398 9.22436 5.59998 8.35719 3.86931 6.91528C3.32114 9.94944 4.39181 12.0514 6.97039 13.6729L8.57181 14.6794C8.6479 14.7273 8.71111 14.793 8.75592 14.8709C8.80073 14.9488 8.82576 15.0365 8.82884 15.1263C8.83191 15.2161 8.81293 15.3053 8.77356 15.3861C8.73419 15.4669 8.67562 15.5368 8.60298 15.5897L7.14364 16.6558C8.01173 16.7099 8.83581 16.6714 9.51964 16.5357C13.8445 15.6722 16.7201 12.418 16.7201 7.05003C16.7201 6.61186 15.7924 5.08744 14.0251 5.08744V5.08744ZM9.53339 7.66328C9.54939 6.77965 9.82571 5.92039 10.3277 5.19306C10.8298 4.46573 11.5352 3.90267 12.3557 3.57436C13.1763 3.24606 14.0754 3.1671 14.9406 3.34738C15.8058 3.52766 16.5985 3.95916 17.2196 4.58786C17.8714 4.58328 18.426 4.74828 19.6662 3.99661C19.3591 5.49994 19.2079 6.15261 18.5534 7.05003C18.5534 14.0552 14.2478 17.4615 9.87898 18.3333C6.88331 18.9309 2.52731 17.9492 1.27881 16.6457C1.91498 16.5962 4.49998 16.3184 5.99414 15.2249C4.73006 14.3916 -0.301525 11.4308 3.00489 3.47044C4.55681 5.28269 6.13073 6.51653 7.72573 7.17103C8.78723 7.60644 9.04756 7.59728 9.53431 7.66419L9.53339 7.66328Z'
                fill='black'
            />
        </g>
        <defs>
            <clipPath id='clip0_283_678'>
                <rect width='22' height='22' fill='white' />
            </clipPath>
        </defs>
    </svg>
);

TwitterIcon.defaultProps = {
    scale: 1,
};

export const FacebookIcon = ({ scale }: SVGProps) => (
    <svg
        width={scale! * 22}
        height={scale! * 22}
        viewBox='0 0 22 22'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <g clipPath='url(#clip0_283_146)'>
            <path
                d='M11 1.83337C5.93729 1.83337 1.83337 5.93729 1.83337 11C1.83337 15.5751 5.18562 19.3674 9.56821 20.0558V13.6492H7.23987V11H9.56821V8.98062C9.56821 6.68346 10.9359 5.41479 13.0305 5.41479C14.0333 5.41479 15.082 5.59354 15.082 5.59354V7.84854H13.927C12.7875 7.84854 12.4328 8.55529 12.4328 9.28037V11H14.9747L14.5686 13.6492H12.4328V20.0558C16.8145 19.3683 20.1667 15.5742 20.1667 11C20.1667 5.93729 16.0628 1.83337 11 1.83337Z'
                fill='black'
            />
        </g>
        <defs>
            <clipPath id='clip0_283_146'>
                <rect width='22' height='22' fill='white' />
            </clipPath>
        </defs>
    </svg>
);

FacebookIcon.defaultProps = {
    scale: 1,
};

export const LocationIcon = ({ scale }: SVGProps) => (
    <svg
        width={scale! * 26}
        height={scale! * 26}
        viewBox='0 0 26 26'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M16.125 11.8452C16.125 12.674 15.7958 13.4689 15.2097 14.0549C14.6237 14.641 13.8288 14.9702 13 14.9702C12.1712 14.9702 11.3763 14.641 10.7903 14.0549C10.2042 13.4689 9.875 12.674 9.875 11.8452C9.875 11.0164 10.2042 10.2216 10.7903 9.63551C11.3763 9.04945 12.1712 8.72021 13 8.72021C13.8288 8.72021 14.6237 9.04945 15.2097 9.63551C15.7958 10.2216 16.125 11.0164 16.125 11.8452V11.8452Z'
            stroke='white'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M20.8125 11.8452C20.8125 19.2848 13 23.564 13 23.564C13 23.564 5.1875 19.2848 5.1875 11.8452C5.1875 9.77321 6.0106 7.78607 7.47573 6.32094C8.94086 4.85582 10.928 4.03271 13 4.03271C15.072 4.03271 17.0591 4.85582 18.5243 6.32094C19.9894 7.78607 20.8125 9.77321 20.8125 11.8452V11.8452Z'
            stroke='white'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);

LocationIcon.defaultProps = {
    scale: 1,
};

export const ShareIcon = ({ scale }: SVGProps) => {
    return (
        <svg
            width={scale! * 29}
            height={scale! * 24}
            viewBox='0 0 29 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M14.1478 15.8333H11.4811C9.29392 15.8325 7.1481 16.4295 5.27562 17.5599C3.40315 18.6902 1.87526 20.3109 0.857122 22.2467C0.828504 21.8874 0.81427 21.5271 0.814455 21.1667C0.814455 13.8027 6.78379 7.83333 14.1478 7.83333V0.5L28.1478 11.8333L14.1478 23.1667V15.8333ZM11.4811 13.1667H16.8145V17.5773L23.9091 11.8333L16.8145 6.08933V10.5H14.1478C12.6148 10.4983 11.0995 10.8278 9.70564 11.4659C8.31177 12.104 7.07221 13.0358 6.07179 14.1973C7.79355 13.515 9.62907 13.1652 11.4811 13.1667Z'
                fill='#828282'
            />
        </svg>
    );
};
