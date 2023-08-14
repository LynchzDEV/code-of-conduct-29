import { Box } from '@mantine/core';

function DiscordButton() {
  return (
    <Box pos="fixed" bottom="20px" left="20px">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={80}
        height={80}
        viewBox="0 0 102 102"
        fill="none"
      >
        <circle cx="51" cy="51" r="51" fill="#4682A9" />
        <path
          d="M75.3491 28.5607C75.3297 28.5225 75.2974 28.4926 75.2582 28.4763C70.7197 26.368 65.9303 24.8645 61.0098 24.0037C60.9651 23.9953 60.9189 24.0013 60.8778 24.021C60.8367 24.0407 60.8028 24.073 60.7809 24.1134C60.1287 25.3119 59.5367 26.5429 59.007 27.8018C53.703 26.9866 48.3079 26.9866 43.0039 27.8018C42.4708 26.5397 41.8692 25.3083 41.2021 24.1134C41.1792 24.0739 41.1451 24.0423 41.1043 24.0228C41.0634 24.0032 41.0177 23.9966 40.973 24.0037C36.0521 24.8627 31.2623 26.3663 26.7244 28.4764C26.6856 28.4931 26.6528 28.5216 26.6306 28.5579C17.5557 42.2795 15.0697 55.6637 16.2893 68.8822C16.2927 68.9146 16.3025 68.9459 16.3182 68.9744C16.3338 69.0029 16.355 69.0279 16.3803 69.0479C21.6646 73.0094 27.5751 76.0332 33.8596 77.9903C33.9038 78.0038 33.9511 78.0032 33.995 77.9886C34.0389 77.974 34.0773 77.9462 34.1052 77.9089C35.4549 76.0493 36.6509 74.0802 37.681 72.0216C37.6952 71.9934 37.7032 71.9624 37.7047 71.9308C37.7062 71.8991 37.701 71.8675 37.6896 71.8381C37.6781 71.8086 37.6606 71.7819 37.6382 71.7598C37.6158 71.7377 37.5891 71.7206 37.5597 71.7097C35.6737 70.979 33.8478 70.0983 32.0992 69.0756C32.0674 69.0567 32.0408 69.0302 32.0215 68.9984C32.0023 68.9665 31.9911 68.9304 31.9889 68.8932C31.9867 68.8559 31.9937 68.8187 32.009 68.7848C32.0244 68.7509 32.0478 68.7214 32.0772 68.6988C32.4441 68.4205 32.8112 68.131 33.1616 67.8386C33.1927 67.8126 33.2304 67.796 33.2703 67.7905C33.3103 67.785 33.351 67.791 33.3878 67.8077C44.8437 73.1013 57.2462 73.1013 68.5665 67.8077C68.6034 67.7899 68.6445 67.7832 68.685 67.7881C68.7256 67.7931 68.7639 67.8096 68.7955 67.8358C69.146 68.1282 69.513 68.4205 69.8827 68.6988C69.9122 68.7212 69.9358 68.7505 69.9514 68.7843C69.967 68.818 69.9742 68.8552 69.9723 68.8924C69.9704 68.9297 69.9595 68.9659 69.9405 68.9978C69.9215 69.0298 69.895 69.0565 69.8634 69.0756C68.1188 70.1069 66.2912 70.9871 64.4003 71.7069C64.3709 71.7182 64.3442 71.7357 64.322 71.7582C64.2998 71.7806 64.2824 71.8076 64.2712 71.8373C64.26 71.867 64.2551 71.8988 64.2568 71.9306C64.2585 71.9623 64.2668 71.9934 64.2812 72.0216C65.3285 74.0688 66.5228 76.0354 67.8543 77.9056C67.8814 77.944 67.9196 77.9728 67.9637 77.9879C68.0078 78.003 68.0554 78.0038 68.0999 77.99C74.3957 76.0395 80.3165 73.0154 85.6074 69.0479C85.6331 69.0289 85.6546 69.0045 85.6703 68.9764C85.686 68.9483 85.6956 68.9171 85.6984 68.8849C87.1585 53.603 83.2542 40.3285 75.3491 28.5607ZM39.3919 60.8335C35.9428 60.8335 33.1009 57.6288 33.1009 53.693C33.1009 49.7573 35.8877 46.5524 39.3919 46.5524C42.9234 46.5524 45.7378 49.7851 45.6827 53.6928C45.6827 57.6288 42.8958 60.8335 39.3919 60.8335ZM62.6515 60.8335C59.2025 60.8335 56.3606 57.6288 56.3606 53.693C56.3606 49.7573 59.1474 46.5524 62.6515 46.5524C66.1833 46.5524 68.9975 49.7851 68.9424 53.6928C68.9424 57.6288 66.1833 60.8335 62.6515 60.8335Z"
          fill="white"
        />
      </svg>
    </Box>
  );
}

export default DiscordButton;
