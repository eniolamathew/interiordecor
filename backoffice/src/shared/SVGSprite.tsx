import React from "react";

const SVGSprite: React.FC = () => (
  <svg
    aria-hidden="true"
    style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <symbol id="cil-3d" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-4k" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="208 184 176 184 176 272 113.68 272 127.28 136 95.12 136 78.32 304 176 304 176 376 208 376 208 304 240 304 240 272 208 272 208 184"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="386.111 136 334.111 240 304 240 304 136 272 136 272 376 304 376 304 272 334.111 272 386.111 376 421.889 376 361.889 256 421.889 136 386.111 136"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M464,16H48A32.036,32.036,0,0,0,16,48V464a32.036,32.036,0,0,0,32,32H464a32.036,32.036,0,0,0,32-32V48A32.036,32.036,0,0,0,464,16Zm0,448H48V48H464l.02,416Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-account-logout" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="77.155 272.034 351.75 272.034 351.75 272.033 351.75 240.034 351.75 240.033 77.155 240.033 152.208 164.98 152.208 164.98 152.208 164.979 129.58 142.353 15.899 256.033 15.9 256.034 15.899 256.034 129.58 369.715 152.208 347.088 152.208 347.087 152.208 347.087 77.155 272.034"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="160 16 160 48 464 48 464 464 160 464 160 496 496 496 496 16 160 16"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-action-redo" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="361.376 495.163 226.753 360.54 249.38 337.913 361.376 449.909 473.373 337.913 496 360.54 361.376 495.163"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M377.377,472.52h-32V196.426C345.377,114.584,278.794,48,196.952,48,113.723,48,48.526,111.106,48.526,191.667h-32c0-48.024,18.85-92.569,53.079-125.429C103.35,33.842,148.576,16,196.952,16c99.487,0,180.425,80.938,180.425,180.426Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-action-undo" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M495.473,197.262c0-73.061-43.651-136.118-106.242-164.462q-2-.9-4.021-1.762-4.046-1.715-8.19-3.235-2.071-.761-4.167-1.47-4.19-1.422-8.468-2.64a180.951,180.951,0,0,0-98.675,0q-4.278,1.218-8.469,2.64-2.094.71-4.166,1.47-4.143,1.519-8.19,3.235-2.023.857-4.021,1.762c-62.592,28.344-106.242,91.4-106.242,164.462h0V434.745L38.627,338.75,16,361.377,150.623,496,285.246,361.377,262.619,338.75l-96,96V197.263c0-72.891,52.814-133.678,122.186-146.1a149.419,149.419,0,0,1,52.479,0c69.371,12.426,122.186,73.213,122.186,146.1h32Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-address-book" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M496,144.768V111.232H456.768V42a25,25,0,0,0-25.179-24.768H80.411A25,25,0,0,0,55.232,42V472a25,25,0,0,0,25.179,24.768H431.589A25,25,0,0,0,456.768,472V400.768H496V367.232H456.768V272.768H496V239.232H456.768V144.768Zm-72.768,94.464H376v33.536h47.232v94.464H376v33.536h47.232v62.464H88.768V50.768H423.232v60.464H376v33.536h47.232Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M313.639,306.925h0l-28.745-18.685,13.82-33.655V201.714a65.714,65.714,0,1,0-131.428,0v52.557l12.721,34.684-27.646,17.97A48.972,48.972,0,0,0,130,348.129V400H336V348.129A48.972,48.972,0,0,0,313.639,306.925ZM304,368H162V348.129a17.084,17.084,0,0,1,7.8-14.373l49.033-31.872-19.547-53.3V201.714a33.714,33.714,0,0,1,67.428,0v46.557l-21.5,52.347L296.2,333.756h0a17.084,17.084,0,0,1,7.8,14.373Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-airplane-mode-off" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M224,113.889a73.235,73.235,0,0,1,26.423-56.413,8.707,8.707,0,0,1,11.154,0A73.235,73.235,0,0,1,288,113.889v92l165.914,82.957L451.243,302.2l-86.936-11.339,37.114,37.112,75.336,9.827,13.329-66.646L320,186.111V113.889a105.155,105.155,0,0,0-37.937-81,40.705,40.705,0,0,0-52.126,0,105.155,105.155,0,0,0-37.937,81v4.675l32,32Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M38.517,16H16.029V38.655L173,195.613,21.914,271.154,35.243,337.8l157.189-20.5,7.735,81.224L128,429.45V496H384V429.45l-72.167-30.929,5.571-58.507L473.4,496H496V473.458ZM352,450.55V464H160V450.55l74.238-31.817L224,311.24V280.908L60.757,302.2l-2.671-13.354,138.762-69.381L288,310.611v.629L277.762,418.733Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-airplane-mode" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M476.757,337.8l13.329-66.646L320,186.111V113.889a105.15,105.15,0,0,0-37.937-81,40.705,40.705,0,0,0-52.126,0,105.15,105.15,0,0,0-37.937,81v72.222L21.914,271.154,35.243,337.8l157.189-20.5,7.736,81.224L128,429.45V496H384V429.45l-72.168-30.929,7.736-81.224ZM352,450.551V464H160V450.551l74.238-31.818L224,311.24V280.908L60.757,302.2l-2.671-13.354L224,205.889v-92a73.235,73.235,0,0,1,26.423-56.413,8.707,8.707,0,0,1,11.154,0A73.235,73.235,0,0,1,288,113.889v92l165.914,82.957L451.243,302.2,288,280.908V311.24L277.762,418.733Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-airplay" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M464,47H48A32.036,32.036,0,0,0,16,79V376a32.036,32.036,0,0,0,32,32h76.448l24.89-32H48V79H464l.02,297H362.662l24.89,32H464a32.036,32.036,0,0,0,32-32V79A32.036,32.036,0,0,0,464,47Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M98.834,496H413.166L256,293.939Zm65.431-32L256,346.061,347.735,464Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-alarm" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,80C141.125,80,48,173.125,48,288s93.125,208,208,208,208-93.125,208-208S370.875,80,256,80ZM380.451,412.451A176,176,0,1,1,432,288,174.849,174.849,0,0,1,380.451,412.451Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="272 160 240 160 240 295.69 326.005 364.494 345.995 339.506 272 280.31 272 160"
          className="ci-primary"
        />
        <rect
          width="184.174"
          height="32.001"
          x="15.913"
          y="60"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
          transform="rotate(-34.38 108.002 76)"
        />
        <rect
          width="32.001"
          height="184.174"
          x="388"
          y="-16.087"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
          transform="rotate(-55.619 404.003 76)"
        />
      </symbol>
      <symbol id="cil-album" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M425.706,86.294A240,240,0,0,0,86.294,425.706,240,240,0,0,0,425.706,86.294ZM256,464C141.309,464,48,370.691,48,256S141.309,48,256,48s208,93.309,208,208S370.691,464,256,464Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,152A104,104,0,1,0,360,256,104.118,104.118,0,0,0,256,152Zm0,176a72,72,0,1,1,72-72A72.081,72.081,0,0,1,256,328Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="240"
          y="240"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,112V80a174.144,174.144,0,0,0-79.968,19.178A177.573,177.573,0,0,0,115.2,150.39l25.586,19.219A142.923,142.923,0,0,1,256,112Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-align-center" viewBox="0 0 512 512">
        <rect
          width="480"
          height="32"
          x="16"
          y="64"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="320"
          height="32"
          x="96"
          y="152"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="480"
          height="32"
          x="16"
          y="240"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="320"
          height="32"
          x="96"
          y="328"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="480"
          height="32"
          x="16"
          y="416"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-align-left" viewBox="0 0 512 512">
        <rect
          width="480"
          height="32"
          x="16"
          y="64"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="328"
          height="32"
          x="16"
          y="152"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="480"
          height="32"
          x="16"
          y="240"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="328"
          height="32"
          x="16"
          y="328"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="480"
          height="32"
          x="16"
          y="416"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-align-right" viewBox="0 0 512 512">
        <rect
          width="480"
          height="32"
          x="16"
          y="64"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="328"
          height="32"
          x="168"
          y="152"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="480"
          height="32"
          x="16"
          y="240"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="328"
          height="32"
          x="168"
          y="328"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="480"
          height="32"
          x="16"
          y="416"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-american-football" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M473.274,47.136l-2.267-4.189-4.188-2.267C416.85,13.637,354.765,6.167,292,19.646c-63.848,13.713-123.787,47.151-173.335,96.7s-82.987,109.487-96.7,173.335C8.489,352.444,15.958,414.529,43,464.5l2.267,4.189,4.189,2.267c33.722,18.25,72.951,27.585,114.194,27.585a288.981,288.981,0,0,0,60.622-6.552c63.848-13.712,123.786-47.151,173.334-96.7S480.6,285.8,494.308,221.952C507.788,159.188,500.318,97.1,473.274,47.136ZM447.354,66.6c19.78,38.858,25.84,83.807,19.4,129.525L317.829,47.2C363.548,40.76,408.5,46.82,447.354,66.6ZM68.922,445.033C48.72,405.346,42.83,359.306,49.953,312.58L201.374,464C154.649,471.125,108.608,465.234,68.922,445.033Zm306.059-72.374h0c-40.434,40.434-88.112,68.589-136.661,83.034L58.261,275.635c14.446-48.55,42.6-96.228,83.034-136.662,41.156-41.156,89.818-69.583,139.264-83.787L458.769,233.4C444.565,282.842,416.138,331.5,374.981,372.659Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="347.313 187.313 324.687 164.687 304 185.373 275.313 156.687 252.687 179.313 281.373 208 256 233.373 227.313 204.687 204.687 227.313 233.373 256 208 281.373 179.313 252.687 156.687 275.313 185.373 304 164.687 324.687 187.313 347.313 208 326.627 236.687 355.313 259.313 332.687 230.627 304 256 278.627 284.687 307.313 307.313 284.687 278.627 256 304 230.627 332.687 259.313 355.313 236.687 326.627 208 347.313 187.313"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-animal" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M382.825,304.576a131.562,131.562,0,0,0-253.65,0l-18.248,66.15A80,80,0,0,0,188.046,472H323.954a80,80,0,0,0,77.119-101.274Zm-20.682,116.5A47.638,47.638,0,0,1,323.954,440H188.046a48,48,0,0,1-46.272-60.765l18.248-66.149a99.563,99.563,0,0,1,191.956,0l18.248,66.149A47.636,47.636,0,0,1,362.143,421.08Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M146.1,230.31c2.784-17.4-.908-36.027-10.4-52.463S111.92,148.9,95.463,142.611c-17.624-6.731-35.6-5.659-50.634,3.017C14.942,162.884,7.077,205.413,27.3,240.433c9.489,16.436,23.778,28.95,40.235,35.236a64.058,64.058,0,0,0,22.863,4.371,55.133,55.133,0,0,0,27.771-7.389C133.194,263.974,143.114,248.937,146.1,230.31Zm-31.6-5.058c-1.43,8.929-5.81,15.92-12.333,19.686S87.4,249,78.95,245.775c-9.613-3.671-18.115-11.251-23.941-21.342-11.2-19.4-8.538-42.8,5.82-51.092a23.483,23.483,0,0,1,11.847-3.058A31.951,31.951,0,0,1,84.044,172.5c9.613,3.673,18.115,11.252,23.941,21.343S116.124,215.091,114.5,225.252Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M149.566,164.017c11.362,9.083,24.337,13.813,37.458,13.812a54.965,54.965,0,0,0,11.689-1.261c33.723-7.331,54.17-45.443,45.58-84.958h0c-4.03-18.546-13.828-34.817-27.588-45.818-14.735-11.78-32.189-16.239-49.147-12.551-33.722,7.33-54.169,45.442-45.58,84.957C126.009,136.745,135.807,153.016,149.566,164.017Zm24.788-99.506a22.258,22.258,0,0,1,4.732-.5c5.948,0,12.066,2.327,17.637,6.781,8.037,6.425,13.826,16.234,16.3,27.621h0c4.76,21.895-4.906,43.368-21.107,46.89-7.361,1.6-15.305-.628-22.367-6.275-8.037-6.426-13.826-16.235-16.3-27.621C148.488,89.506,158.154,68.033,174.354,64.511Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M467.171,145.628c-15.028-8.676-33.013-9.748-50.634-3.017-16.457,6.287-30.746,18.8-40.235,35.236s-13.182,35.067-10.4,52.463c2.982,18.627,12.9,33.664,27.931,42.341a55.123,55.123,0,0,0,27.771,7.389,64.054,64.054,0,0,0,22.863-4.371c16.457-6.286,30.746-18.8,40.235-35.236C504.923,205.413,497.058,162.884,467.171,145.628Zm-10.18,78.805c-5.826,10.091-14.328,17.671-23.941,21.342-8.446,3.228-16.692,2.931-23.215-.837s-10.9-10.757-12.333-19.686c-1.626-10.161.686-21.314,6.513-31.4s14.328-17.67,23.941-21.343a31.955,31.955,0,0,1,11.368-2.221,23.483,23.483,0,0,1,11.847,3.058C465.529,181.631,468.194,205.028,456.991,224.433Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M313.287,176.568a54.965,54.965,0,0,0,11.689,1.261c13.12,0,26.1-4.729,37.458-13.812,13.759-11,23.557-27.272,27.588-45.818,8.589-39.515-11.858-77.627-45.58-84.957-16.957-3.686-34.412.77-49.147,12.551-13.76,11-23.558,27.272-27.588,45.817C259.117,131.125,279.564,169.237,313.287,176.568Zm-14.31-78.16h0c2.474-11.387,8.263-21.2,16.3-27.621,5.572-4.454,11.689-6.781,17.637-6.781a22.258,22.258,0,0,1,4.732.5c16.2,3.522,25.866,25,21.107,46.89-2.476,11.387-8.265,21.2-16.3,27.622-7.061,5.646-15,7.874-22.367,6.275C303.883,141.776,294.217,120.3,298.977,98.408Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-aperture" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256.684,16.736A239.3,239.3,0,0,0,87.475,425.245,239.3,239.3,0,0,0,425.894,86.825,237.736,237.736,0,0,0,256.684,16.736Zm-9.9,32.242L146.033,224.237,92.048,130.226A207.136,207.136,0,0,1,246.787,48.978Zm56.437,127.035,45.912,79.413-46.2,80.791h-92.6l-45.859-79.859,46.189-80.345ZM72.648,160.7,173.436,336.217H65.526A207.1,207.1,0,0,1,72.648,160.7Zm9.791,207.515h202.2l-53.494,93.542A207.584,207.584,0,0,1,82.439,368.217Zm184.818,94.849L367.668,287.48l54.168,93.692A207.167,207.167,0,0,1,267.257,463.066ZM441.125,350.6,340.187,176.013H447.908A207.133,207.133,0,0,1,441.125,350.6ZM229.063,144.013l53.825-93.627a207.609,207.609,0,0,1,148.147,93.627Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-apple" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M452.415,213.048c-10.609-27.192-27.511-48.256-48.92-61.078a157.712,157.712,0,0,1-17.583,26.757c.038.022.077.041.115.063,31.881,18.323,50.423,65.148,45.091,113.871-8.833,80.721-33.35,136.043-69.036,155.775-23.2,12.827-52.133,11-86-5.424l-3.308-1.6H248.385l-3.307,1.6c-33.867,16.426-62.8,18.251-86,5.424-35.685-19.732-60.2-75.054-69.036-155.775-5.332-48.723,13.211-95.549,45.091-113.871a66.626,66.626,0,0,1,33.74-8.768c24.143,0,51.966,11.311,82.2,33.656l1.078.8S295.734,199.179,313,191.34c52.021-23.617,63.5-61.156,65.536-66.254a121.886,121.886,0,0,0-1.021-93.559l-4.073-10.169-10.949.11A122.777,122.777,0,0,0,242.039,159.7c-18.9-10.59-37.278-17.343-54.884-20.14-24.943-3.965-47.811-.1-67.968,11.486-22.138,12.724-39.581,34.164-50.442,62-9.874,25.307-13.608,54.817-10.514,83.094,10.142,92.681,39.659,155.027,85.361,180.3a99.908,99.908,0,0,0,49.1,12.543c19.585,0,40.629-5.194,62.975-15.575h9.83c42.394,19.693,80.085,20.718,112.071,3.032,45.7-25.271,75.221-87.617,85.363-180.3C466.023,267.865,462.289,238.355,452.415,213.048ZM328.019,60.826a90.513,90.513,0,0,1,23.693-6.564,90.8,90.8,0,0,1-75.056,115.205A90.839,90.839,0,0,1,328.019,60.826Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-applications-settings" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M88,160A64,64,0,1,0,24,96,64.072,64.072,0,0,0,88,160Zm0-96A32,32,0,1,1,56,96,32.036,32.036,0,0,1,88,64Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,32a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,32Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,128Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M424,160a64,64,0,1,0-64-64A64.072,64.072,0,0,0,424,160Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,424,64Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M88,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,88,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,88,288Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M424,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,424,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,424,288Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M424,352a64,64,0,1,0,64,64A64.072,64.072,0,0,0,424,352Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,424,448Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="56"
          y="408"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="152"
          y="408"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="248"
          y="408"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-applications" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M88,32a64,64,0,1,0,64,64A64.072,64.072,0,0,0,88,32Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,88,128Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,32a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,32Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,128Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M424,160a64,64,0,1,0-64-64A64.072,64.072,0,0,0,424,160Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,424,64Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M88,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,88,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,88,288Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M424,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,424,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,424,288Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M88,352a64,64,0,1,0,64,64A64.072,64.072,0,0,0,88,352Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,88,448Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,352a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,352Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,448Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M424,352a64,64,0,1,0,64,64A64.072,64.072,0,0,0,424,352Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,424,448Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-apps-settings" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M88,160A64,64,0,1,0,24,96,64.072,64.072,0,0,0,88,160Zm0-96A32,32,0,1,1,56,96,32.036,32.036,0,0,1,88,64Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,32a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,32Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,128Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M424,160a64,64,0,1,0-64-64A64.072,64.072,0,0,0,424,160Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,424,64Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M88,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,88,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,88,288Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M424,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,424,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,424,288Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M424,352a64,64,0,1,0,64,64A64.072,64.072,0,0,0,424,352Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,424,448Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="56"
          y="408"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="152"
          y="408"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="248"
          y="408"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-apps" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M88,32a64,64,0,1,0,64,64A64.072,64.072,0,0,0,88,32Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,88,128Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,32a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,32Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,128Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M424,160a64,64,0,1,0-64-64A64.072,64.072,0,0,0,424,160Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,424,64Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M88,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,88,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,88,288Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M424,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,424,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,424,288Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M88,352a64,64,0,1,0,64,64A64.072,64.072,0,0,0,88,352Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,88,448Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,352a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,352Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,448Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M424,352a64,64,0,1,0,64,64A64.072,64.072,0,0,0,424,352Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,424,448Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-arrow-bottom" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="367.997 338.75 271.999 434.747 271.999 17.503 239.999 17.503 239.999 434.745 144.003 338.75 121.376 361.377 256 496 390.624 361.377 367.997 338.75"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-arrow-circle-bottom" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="272.112 314.481 272.112 128 240.112 128 240.112 314.481 165.059 239.429 142.432 262.056 256.112 375.736 369.793 262.056 347.166 239.429 272.112 314.481"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-arrow-circle-left" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,16.042c-132.548,0-240,107.451-240,240s107.452,240,240,240,240-107.452,240-240S388.548,16.042,256,16.042ZM403.078,403.12A207.253,207.253,0,1,1,447.667,337,207.364,207.364,0,0,1,403.078,403.12Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="272.614 164.987 249.986 142.36 136.305 256.041 249.986 369.722 272.614 347.095 197.56 272.041 385 272.041 385 240.041 197.56 240.041 272.614 164.987"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-arrow-circle-right" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256.25,16.042c-132.548,0-240,107.451-240,240s107.452,240,240,240,240-107.452,240-240S388.8,16.042,256.25,16.042ZM403.328,403.12A207.253,207.253,0,1,1,447.917,337,207.364,207.364,0,0,1,403.328,403.12Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="239.637 164.987 314.69 240.041 128.137 240.041 128.137 272.041 314.69 272.041 239.637 347.095 262.264 369.722 375.945 256.041 262.264 142.36 239.637 164.987"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-arrow-circle-top" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="142.319 241.027 164.947 263.654 240 188.602 240 376 272 376 272 188.602 347.053 263.654 369.681 241.027 256 127.347 142.319 241.027"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-arrow-left" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="497.333 239.999 80.092 239.999 176.087 144.004 153.46 121.377 18.837 256 153.46 390.623 176.087 367.996 80.09 271.999 497.333 271.999 497.333 239.999"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-arrow-right" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="359.873 121.377 337.246 144.004 433.243 240.001 16 240.001 16 240.002 16 272.001 16 272.002 433.24 272.002 337.246 367.996 359.873 390.623 494.498 256 359.873 121.377"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-arrow-thick-bottom" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M255.682,494.636,16,254.3V216.024l143.937-.007V16h192V216.007L495.952,216l-.035,38.688ZM54.931,248.022l200.8,201.342L457.328,248l-137.391.008V48h-128V248.015Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-arrow-thick-from-bottom" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256.2,16,56,215.993v38.632H176v144H336v-144H456V216ZM304,222.625v144H208v-144H94.639L256.174,61.254l161.21,161.371Z"
          className="ci-primary"
        />
        <rect
          width="400"
          height="32"
          x="56"
          y="462.625"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-arrow-thick-from-left" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M296.007,56H257.375V176h-144V336h144V456H296L496,256.2Zm-6.632,361.384V304h-144V208h144V94.639l161.37,161.535Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="400"
          x="17.375"
          y="56"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-arrow-thick-from-right" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M254.625,56H215.993L16,256.2,216,456h38.623V336h144V176h-144Zm112,152v96h-144V417.384L61.255,256.174,222.625,94.639V208Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="400"
          x="462.625"
          y="56"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-arrow-thick-from-top" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M336,113.375H176v144H56V296L255.8,496,456,296.007V257.375H336Zm81.361,176L255.826,450.746,94.616,289.375H208v-144h96v144Z"
          className="ci-primary"
        />
        <rect
          width="400"
          height="32"
          x="56"
          y="17.376"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-arrow-thick-left" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M294.637,496l-38.688-.035L16,255.729,256.334,16.048h38.277l.008,143.937H494.636v192H294.629ZM61.271,255.773l201.364,201.6-.008-137.391H462.636v-128H262.621l-.008-137.006Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-arrow-thick-right" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M254.3,496H216.025l-.008-143.937H16v-192H216.007L216,16.048l38.688.035L494.636,256.318ZM48,320.063H248.015l.007,137.006,201.342-200.8L248,54.672l.008,137.391H48Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-arrow-thick-to-bottom" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M336,176.005V16H176v160H56v38.623l199.8,200L456,214.637V176.005ZM255.826,369.376,94.616,208.005H208V48h96v160H417.361Z"
          className="ci-primary"
        />
        <rect
          width="400"
          height="32"
          x="56"
          y="464"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-arrow-thick-to-left" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M336,176V56H297.373l-200,199.8L297.363,456H336V336H496V176ZM464,304H304V417.361L142.625,255.826,304,94.616V208H464Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="400"
          x="16"
          y="56"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-arrow-thick-to-right" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M176,56V176H16V336H176V456h38.623l200-199.8L214.635,56Zm32,361.384V304H48V208H208V94.639L369.373,256.174Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="400"
          x="463.998"
          y="56"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-arrow-thick-to-top" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M56,297.365V336H176V496H336V336H456V297.374l-199.8-200ZM304,304V464H208V304H94.639l161.535-161.37L417.384,304Z"
          className="ci-primary"
        />
        <rect
          width="400"
          height="32"
          x="56"
          y="16.002"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-arrow-thick-top" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M352.063,496h-192V295.993L16.047,296l.037-38.688L256.318,17.364,496,257.7v38.278l-143.937.006Zm-160-32h128V263.984l137.006-.006L256.274,62.636,54.672,264l137.391-.008Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-arrow-top" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="390.624 150.625 256 16 121.376 150.625 144.004 173.252 240.001 77.254 240.001 495.236 272.001 495.236 272.001 77.257 367.996 173.252 390.624 150.625"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-assistive-listening-system" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M277.139,85.414l-8.428,31.021A154.494,154.494,0,0,1,394.266,236.391l31.921-3.6A186.588,186.588,0,0,0,277.139,85.414Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M422.061,89.939A250.681,250.681,0,0,0,294.6,21.146l-8.425,31.005c88.461,17.4,158.108,87.873,174.267,176.767l31.9-3.6A250.6,250.6,0,0,0,422.061,89.939Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M233.106,148.753q-1.576-.021-3.146,0A124.083,124.083,0,0,0,107.022,272.83h32.237a92.091,92.091,0,0,1,91.062-92.085q1.05-.009,2.1,0c49.729.69,90.451,41.722,90.774,91.465a91.233,91.233,0,0,1-28.62,67.331,24.021,24.021,0,0,0-7.408,17.333v50.686A56.5,56.5,0,0,1,230.736,464H222.1v32h8.869a88.534,88.534,0,0,0,88.434-88.435V360.247a124.615,124.615,0,0,0,36.027-88.24A124.438,124.438,0,0,0,233.106,148.753Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M283.141,272.83a52.03,52.03,0,1,0-104.059,0h32a20.03,20.03,0,1,1,40.059,0Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="216"
          y="304"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="112"
          y="408"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="31.999"
          height="124.451"
          x="162.963"
          y="310.812"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
          transform="rotate(-45 178.963 373.037)"
        />
      </symbol>
      <symbol id="cil-asterisk-circle" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="272 227.616 272 121.388 240 121.388 240 227.617 141.377 167.935 138.946 171.952 138.946 203.867 225.096 256 138.946 308.133 138.946 340.048 141.377 344.065 240 284.383 240 390.612 272 390.612 272 284.384 370.623 344.065 373.054 340.049 373.054 308.134 286.903 256 373.054 203.866 373.054 171.951 370.623 167.935 272 227.616"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M425.857,87.379A239.365,239.365,0,0,0,87.344,425.892,239.365,239.365,0,0,0,425.857,87.379ZM256.6,464C142.259,464,49.236,370.977,49.236,256.636S142.259,49.271,256.6,49.271s207.365,93.023,207.365,207.365S370.942,464,256.6,464Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-asterisk" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="286.903 256 416 177.877 416 141.115 415.717 140.646 272 227.617 272 72 240 72 240 227.617 96.283 140.646 96 141.115 96 177.877 225.097 256 96 334.123 96 370.885 96.283 371.354 240 284.383 240 440 272 440 272 284.383 415.717 371.354 416 370.885 416 334.123 286.903 256"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-at" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M495.826,232a206.644,206.644,0,0,0-18.882-78.412,227.033,227.033,0,0,0-51.61-71.261C379.708,39.555,319.571,16,256,16A240,240,0,0,0,86.294,425.706a240,240,0,0,0,337.671,1.722l-22.4-22.856A206.824,206.824,0,0,1,256,464C141.309,464,48,370.691,48,256S141.309,48,256,48c112.748,0,208,87.925,208,192v36c0,28.673-25.122,52-56,52s-56-23.327-56-52V160H320v26.751a99.988,99.988,0,1,0,12.55,132.437C347.956,343.62,376.01,360,408,360c48.523,0,88-37.682,88-84V232ZM252,328a68,68,0,1,1,68-68A68.077,68.077,0,0,1,252,328Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-audio-description" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M472,64H40A24.028,24.028,0,0,0,16,88V424a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V88A24.028,24.028,0,0,0,472,64Zm-8,352H48V96H464Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M134.2,288h59.6l18.667,56H246.2L187.532,168H140.468L81.8,344h33.731Zm29.333-88h.936l18.667,56h-38.27Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M424,263.333V248.667A80.758,80.758,0,0,0,343.333,168H280V344h63.333A80.758,80.758,0,0,0,424,263.333ZM312,200h31.333A48.722,48.722,0,0,1,392,248.667v14.666A48.722,48.722,0,0,1,343.333,312H312Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-audio-spectrum" viewBox="0 0 512 512">
        <rect
          width="32"
          height="192"
          x="16"
          y="160"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="192"
          x="376"
          y="160"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="328"
          x="104"
          y="88"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="320"
          x="288"
          y="96"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="320"
          x="464"
          y="96"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="480"
          x="192"
          y="16"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-audio" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M110.763,110.763l-22.7-22.7c-.095.1-.193.186-.288.281a238.483,238.483,0,0,0-.7,336.573l22.7-22.7a206.144,206.144,0,0,1,.988-291.462Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M425.069,88.348c-.4-.4-.817-.793-1.223-1.194l-22.7,22.7a206.142,206.142,0,0,1,1.5,292.8l22.7,22.7a238.492,238.492,0,0,0-.281-337Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M153.523,153.522a145.746,145.746,0,0,0-.989,205.944l22.617-22.617a113.8,113.8,0,0,1,.989-160.71Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M335.773,175.227a113.8,113.8,0,0,1,1.5,162.05L359.9,359.9a145.746,145.746,0,0,0-1.5-207.285Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M294.766,216.234a55.914,55.914,0,1,0,17.658,40.759A55.783,55.783,0,0,0,294.766,216.234Zm-38.342,64.759a24,24,0,1,1,24-24A24,24,0,0,1,256.424,280.993Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-av-timer" viewBox="0 0 512 512">
        <rect
          width="32"
          height="32"
          x="240"
          y="384"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="96"
          y="240"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="384"
          y="240"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M414.392,97.608A222.332,222.332,0,0,0,272,32.567V32H240v96h32V64.672C370.41,72.83,448,155.519,448,256c0,105.869-86.131,192-192,192S64,361.869,64,256a191.61,191.61,0,0,1,56.408-135.942l115.624,145.88,25.078-19.876L124.6,73.828l-12.606,10.59a224,224,0,1,0,302.4,13.19Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-baby-carriage" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M445.057,345.134,464,274.1V232c-8.136-93.993-87.933-168-184-168H248V232H132.158l-17.844-78.768A32.155,32.155,0,0,0,83.038,128H16v32H83.038l40.475,178.67A80,80,0,1,0,224,416q0-4.05-.4-8H328.4q-.395,3.948-.4,8a80,80,0,1,0,117.057-70.866ZM280,96c78.411,0,143.145,59.678,151.164,136H280ZM144,464a48,48,0,1,1,48-48A48.055,48.055,0,0,1,144,464Zm194.763-88H213.237a80.166,80.166,0,0,0-57.316-39.108L139.408,264H432v5.9l-17.7,66.368c-2.082-.163-4.179-.271-6.3-.271A80.026,80.026,0,0,0,338.763,376ZM408,464a48,48,0,1,1,48-48A48.055,48.055,0,0,1,408,464Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-baby" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M425.39,200.035A184.3,184.3,0,0,0,290.812,91.289L317.568,48.48,290.432,31.52,255.127,88.008A184.046,184.046,0,0,0,86.61,200.035a71.978,71.978,0,0,0,0,143.93,184.071,184.071,0,0,0,338.78,0,71.978,71.978,0,0,0,0-143.93Zm27.152,99.975a39.77,39.77,0,0,1-27.76,11.961l-20.725.394-8.113,19.074a152.066,152.066,0,0,1-279.887,0l-8.114-19.074-20.725-.394a39.978,39.978,0,0,1,0-79.942l20.725-.394,8.114-19.074a152.067,152.067,0,0,1,279.887,0l8.113,19.074,20.725.394a39.974,39.974,0,0,1,27.76,67.981Z"
          className="ci-primary"
        />
        <rect
          width="40"
          height="40"
          x="168"
          y="232"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="40"
          height="40"
          x="304"
          y="232"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,384a80,80,0,0,0,80-80H176A80,80,0,0,0,256,384Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-backspace" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="227.313 363.313 312 278.627 396.687 363.313 419.313 340.687 334.627 256 419.313 171.313 396.687 148.687 312 233.373 227.313 148.687 204.687 171.313 289.373 256 204.687 340.687 227.313 363.313"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M472,64H194.644a24.091,24.091,0,0,0-17.42,7.492L16,241.623v28.754L177.224,440.508A24.091,24.091,0,0,0,194.644,448H472a24.028,24.028,0,0,0,24-24V88A24.028,24.028,0,0,0,472,64Zm-8,352H198.084L48,257.623v-3.246L198.084,96H464Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-badge" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-balance-scale" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M203.247,386.414,208,381.185V355.4L130.125,191H93.875L16,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42A124.343,124.343,0,0,0,203.247,386.414ZM176,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,48,369.667V362.6l64-135.112L176,362.6Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M418.125,191h-36.25L304,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42a124.343,124.343,0,0,0,91.369-40.607L496,381.185V355.4ZM464,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,336,369.667V362.6l64-135.112L464,362.6Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M272,196.659A56.223,56.223,0,0,0,309.659,159H416V127H309.659a55.991,55.991,0,0,0-107.318,0H96v32H202.341A56.223,56.223,0,0,0,240,196.659V463H136v32H376V463H272ZM232,143a24,24,0,1,1,24,24A24,24,0,0,1,232,143Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-ban" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M425.706,86.294A240,240,0,0,0,86.294,425.705,240,240,0,0,0,425.706,86.294ZM256,48A207.1,207.1,0,0,1,391.528,98.345L98.345,391.528A207.1,207.1,0,0,1,48,256C48,141.309,141.309,48,256,48Zm0,416a207.084,207.084,0,0,1-134.986-49.887l293.1-293.1A207.084,207.084,0,0,1,464,256C464,370.691,370.691,464,256,464Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-bank" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M247.759,14.358,16,125.946V184H496V125.638ZM464,152H48v-5.946L248.241,49.642,464,146.362Z"
          className="ci-primary"
        />
        <rect
          width="416"
          height="32"
          x="48"
          y="408"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="480"
          height="32"
          x="16"
          y="464"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="160"
          x="56"
          y="216"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="160"
          x="424"
          y="216"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="160"
          x="328"
          y="216"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="160"
          x="152"
          y="216"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="160"
          x="240"
          y="216"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-bar-chart" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M136,416h88a24.028,24.028,0,0,0,24-24V184a24.028,24.028,0,0,0-24-24H136a24.028,24.028,0,0,0-24,24V392A24.028,24.028,0,0,0,136,416Zm8-224h72V384H144Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M424,16H336a24.028,24.028,0,0,0-24,24V392a24.028,24.028,0,0,0,24,24h88a24.028,24.028,0,0,0,24-24V40A24.028,24.028,0,0,0,424,16Zm-8,368H344V48h72Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="48 16 16 16 16 496 496 496 496 464 48 464 48 16"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-barcode" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M16,464H496V56H16ZM48,88H464V432H48Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="256"
          x="80"
          y="128"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="192"
          x="144"
          y="128"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="256"
          x="208"
          y="128"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="192"
          x="272"
          y="128"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="192"
          x="336"
          y="128"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="256"
          x="400"
          y="128"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="144"
          y="352"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="272"
          y="352"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="336"
          y="352"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-baseball" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M108,200a92,92,0,1,0-92-92A92.1,92.1,0,0,0,108,200Zm0-152a60,60,0,1,1-60,60A60.068,60.068,0,0,1,108,48Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M476.937,38.26h0a76,76,0,0,0-107.48,0l-5.475,5.475c-21.053,21.053-41.553,43.192-60.93,65.8l-.318.37L163.905,293.467,78.548,378.825a38.263,38.263,0,0,0-46.122,60.229l40.52,40.519a38.272,38.272,0,0,0,60.238-46.13l85.24-85.24,179.9-130.76.841-.654c26.865-22.4,53.031-46.31,77.771-71.049A76.088,76.088,0,0,0,476.937,38.26Zm-22.629,84.853c-23.934,23.935-49.243,47.067-75.23,68.761L197.576,323.8,88.854,432.519l15.572,15.574a6.26,6.26,0,1,1-8.852,8.853l-40.52-40.519a6.26,6.26,0,0,1,8.853-8.854L79.48,423.147,188.1,314.533l139.57-184.541c18.752-21.863,38.581-43.267,58.943-63.63l5.475-5.474a44,44,0,1,1,62.225,62.225Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-basket" viewBox="0 0 512 512">
        <rect
          width="32"
          height="128"
          x="120"
          y="304"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="128"
          x="200"
          y="304"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="128"
          x="280"
          y="304"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="128"
          x="360"
          y="304"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M473.681,168,394.062,16H357.938l79.619,152H74.443L154.062,16H117.938L38.319,168H16V279.468L58.856,496H453.117L496,281.584V168ZM464,278.416,426.883,464H85.144L48,276.332V272H464ZM464,240H48V200H464Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-basketball" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,16A240,240,0,0,0,86.294,425.706,240,240,0,0,0,425.706,86.294,238.432,238.432,0,0,0,256,16ZM107.761,110.25q4.21,5.825,8.145,12.466c18.663,31.593,29.823,72.765,31.985,117.284H48.609A207.386,207.386,0,0,1,107.761,110.25Zm0,291.5A207.386,207.386,0,0,1,48.609,272h99.282c-2.162,44.519-13.322,85.691-31.985,117.284Q111.981,395.93,107.761,401.75ZM240,463.391a206.866,206.866,0,0,1-108.049-40.532,190.612,190.612,0,0,0,11.507-17.3c21.483-36.368,34.233-83.3,36.471-133.559H240ZM240,240H179.929c-2.238-50.257-14.988-97.191-36.471-133.559a190.612,190.612,0,0,0-11.507-17.3A206.866,206.866,0,0,1,240,48.609ZM272,48.609A206.866,206.866,0,0,1,380.049,89.141a190.612,190.612,0,0,0-11.507,17.3c-21.483,36.368-34.233,83.3-36.471,133.559H272Zm0,414.782V272h60.071c2.238,50.257,14.988,97.191,36.471,133.559a190.612,190.612,0,0,0,11.507,17.3A206.866,206.866,0,0,1,272,463.391ZM404.239,401.75q-4.21-5.824-8.145-12.466C377.431,357.691,366.271,316.519,364.109,272h99.282A207.386,207.386,0,0,1,404.239,401.75ZM364.109,240c2.162-44.519,13.322-85.691,31.985-117.284q3.925-6.646,8.145-12.466A207.386,207.386,0,0,1,463.391,240Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-bath" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M464,280H80V100A51.258,51.258,0,0,1,95.113,63.515l.4-.4a51.691,51.691,0,0,1,58.6-10.162,79.1,79.1,0,0,0,11.778,96.627l10.951,10.951-20.157,20.158,22.626,22.626,20.157-20.157h0L311.157,71.471h0l20.157-20.157L308.687,28.687,288.529,48.844,277.578,37.893a79.086,79.086,0,0,0-100.929-8.976A83.61,83.61,0,0,0,72.887,40.485l-.4.4A83.054,83.054,0,0,0,48,100V280H16v32H48v30.7a23.95,23.95,0,0,0,1.232,7.589L79,439.589A23.969,23.969,0,0,0,101.766,456h12.9L103,496h33.333L148,456H356.1l12,40H401.5l-12-40h20.73A23.969,23.969,0,0,0,433,439.589l29.766-89.3A23.982,23.982,0,0,0,464,342.7V312h32V280ZM188.52,60.52a47.025,47.025,0,0,1,66.431,0L265.9,71.471,199.471,137.9,188.52,126.951A47.027,47.027,0,0,1,188.52,60.52ZM432,341.4,404.468,424H107.532L80,341.4V312H432Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-bathroom" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M464,280H80V100A51.258,51.258,0,0,1,95.113,63.515l.4-.4a51.691,51.691,0,0,1,58.6-10.162,79.1,79.1,0,0,0,11.778,96.627l10.951,10.951-20.157,20.158,22.626,22.626,20.157-20.157h0L311.157,71.471h0l20.157-20.157L308.687,28.687,288.529,48.844,277.578,37.893a79.086,79.086,0,0,0-100.929-8.976A83.61,83.61,0,0,0,72.887,40.485l-.4.4A83.054,83.054,0,0,0,48,100V280H16v32H48v30.7a23.95,23.95,0,0,0,1.232,7.589L79,439.589A23.969,23.969,0,0,0,101.766,456h12.9L103,496h33.333L148,456H356.1l12,40H401.5l-12-40h20.73A23.969,23.969,0,0,0,433,439.589l29.766-89.3A23.982,23.982,0,0,0,464,342.7V312h32V280ZM188.52,60.52a47.025,47.025,0,0,1,66.431,0L265.9,71.471,199.471,137.9,188.52,126.951A47.027,47.027,0,0,1,188.52,60.52ZM432,341.4,404.468,424H107.532L80,341.4V312H432Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-battery-0" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M39.986,424H408a23.825,23.825,0,0,0,24-23.59V344h64V176H432V119.59A23.825,23.825,0,0,0,408,96H39.986a23.825,23.825,0,0,0-24,23.59V400.41A23.825,23.825,0,0,0,39.986,424Zm8-296H400v80h64V312H400v80H47.986Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-battery-3" viewBox="0 0 512 512">
        <rect
          width="32"
          height="200"
          x="80"
          y="160"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="200"
          x="144"
          y="160"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="200"
          x="208"
          y="160"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M432,176V119.59A23.825,23.825,0,0,0,408,96H39.986a23.825,23.825,0,0,0-24,23.59V400.41a23.825,23.825,0,0,0,24,23.59H408a23.825,23.825,0,0,0,24-23.59V344h64V176Zm32,136H400v80H47.986V128H400v80h64Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-battery-5" viewBox="0 0 512 512">
        <rect
          width="32"
          height="200"
          x="80"
          y="160"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="200"
          x="144"
          y="160"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="200"
          x="208"
          y="160"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="200"
          x="272"
          y="160"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="200"
          x="336"
          y="160"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M432,176V119.59A23.825,23.825,0,0,0,408,96H39.986a23.825,23.825,0,0,0-24,23.59V400.41a23.825,23.825,0,0,0,24,23.59H408a23.825,23.825,0,0,0,24-23.59V344h64V176Zm32,136H400v80H47.986V128H400v80h64Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-battery-alert" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M432,176V119.59A23.825,23.825,0,0,0,408,96H240v32H400v80h64V312H400v80H47.986V128H112V96H39.986a23.825,23.825,0,0,0-24,23.59V400.41a23.825,23.825,0,0,0,24,23.59H408a23.825,23.825,0,0,0,24-23.59V344h64V176Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="192 64 192 56 160 56 160 64 160 256 192 256 192 64"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="192 304 192 288 160 288 160 304 160 320 192 320 192 304"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-battery-empty" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M39.986,424H408a23.825,23.825,0,0,0,24-23.59V344h64V176H432V119.59A23.825,23.825,0,0,0,408,96H39.986a23.825,23.825,0,0,0-24,23.59V400.41A23.825,23.825,0,0,0,39.986,424Zm8-296H400v80h64V312H400v80H47.986Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-battery-full" viewBox="0 0 512 512">
        <rect
          width="32"
          height="200"
          x="80"
          y="160"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="200"
          x="144"
          y="160"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="200"
          x="208"
          y="160"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="200"
          x="272"
          y="160"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="200"
          x="336"
          y="160"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M432,176V119.59A23.825,23.825,0,0,0,408,96H39.986a23.825,23.825,0,0,0-24,23.59V400.41a23.825,23.825,0,0,0,24,23.59H408a23.825,23.825,0,0,0,24-23.59V344h64V176Zm32,136H400v80H47.986V128H400v80h64Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-battery-slash" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M432,176V119.59A23.825,23.825,0,0,0,408,96H163.882l32,32H400v80h64V312H416v32h80V176Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M150.627,128l-32-32-80-80H16V38.627L73.373,96H39.986a23.825,23.825,0,0,0-24,23.59V400.41a23.825,23.825,0,0,0,24,23.59H401.373l72,72H496V473.373L266.563,243.937ZM47.986,392V128h57.387l264,264Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-beach-access" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M259.431,268.8l140-140-27.785-27.785A208.333,208.333,0,0,0,77.019,395.646L104.8,423.431l132-132L401.372,456h45.256ZM224.333,72a175.182,175.182,0,0,1,124.686,51.646l5.157,5.158-57.058,57.058a477.658,477.658,0,0,0-62.879-53.924C209.023,114.1,184.8,101.609,162.245,94.807a152.909,152.909,0,0,0-17.092-4.129A175.58,175.58,0,0,1,224.333,72ZM104.8,378.176l-5.158-5.157A176.637,176.637,0,0,1,66.678,169.153a153.129,153.129,0,0,0,4.129,17.092c6.8,22.556,19.3,46.778,37.131,71.994a477.658,477.658,0,0,0,53.924,62.879Zm79.7-79.7c-11.857-11.634-32.231-32.977-50.438-58.718-22.872-32.336-46.59-77.9-33.753-115.45,37.421-12.793,82.8,10.736,115.005,33.437,25.864,18.233,47.431,38.815,59.158,50.759Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-beaker" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M80,495.918l352.039.08h.006a24,24,0,0,0,24-24.008L456,354.472a23.9,23.9,0,0,0-4.239-13.613L344,184.511V121h40a24.028,24.028,0,0,0,24-24V16H104V97a24.027,24.027,0,0,0,24,24h39.917v64.621L60.276,340.834A23.9,23.9,0,0,0,56,354.509V471.918A24.029,24.029,0,0,0,80,495.918ZM199.917,195.631V89H136V48H376V89H312V194.47L376.465,288H135.859ZM88,357.011,113.667,320H398.52L424,356.971,424.037,464,88,463.92Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-bed" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M416,224H208V344.619H185.846v-41A87.716,87.716,0,0,0,98.229,216H48V152H16V496H48V448.257l416,3.328V496h32V304A80.091,80.091,0,0,0,416,224ZM48,248H98.229a55.68,55.68,0,0,1,55.617,55.617v41H48ZM464,419.584,48,416.256V376.619H464Zm0-74.965H240V256H416a48.055,48.055,0,0,1,48,48Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-bell-exclamation" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M451.671,348.569,408,267.945V184c0-83.813-68.187-152-152-152S104,100.187,104,184v83.945L60.329,348.568A24,24,0,0,0,81.432,384h86.944c-.241,2.636-.376,5.3-.376,8a88,88,0,0,0,176,0c0-2.7-.135-5.364-.376-8h86.944a24,24,0,0,0,21.1-35.431ZM312,392a56,56,0,1,1-111.418-8H311.418A55.85,55.85,0,0,1,312,392ZM94.863,352,136,276.055V184a120,120,0,0,1,240,0v92.055L417.137,352Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="136"
          x="240"
          y="112"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="240"
          y="280"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-bell" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M450.27,348.569,406.6,267.945V184c0-83.813-68.187-152-152-152s-152,68.187-152,152v83.945L58.928,348.568A24,24,0,0,0,80.031,384h86.935c-.238,2.636-.367,5.3-.367,8a88,88,0,0,0,176,0c0-2.7-.129-5.364-.367-8h86.935a24,24,0,0,0,21.1-35.431ZM310.6,392a56,56,0,1,1-111.419-8H310.018A56.14,56.14,0,0,1,310.6,392ZM93.462,352,134.6,276.055V184a120,120,0,0,1,240,0v92.055L415.736,352Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-bike" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M116,468A100,100,0,1,0,16,368,100.113,100.113,0,0,0,116,468Zm0-168a68,68,0,1,1-68,68A68.077,68.077,0,0,1,116,300Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M296,368A100,100,0,1,0,396,268,100.113,100.113,0,0,0,296,368Zm100-68a68,68,0,1,1-68,68A68.077,68.077,0,0,1,396,300Z"
          className="ci-primary"
        />
        <circle
          cx="317.912"
          cy="94.088"
          r="34.088"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M190.954,266.3,240,314.69V404h32V311.345a24.154,24.154,0,0,0-7.144-17.084l-51.274-50.588,66.453-66.453L338.2,236.771A24.14,24.14,0,0,0,355.369,244H384V212H358.738l-92.487-94.688-.475.464-8.4-8.4-112,112,45.254,45.254Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-birthday-cake" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M422,226.067H312v-96H276A85.425,85.425,0,0,0,293.054,78.5c0-27.64-13.079-53.611-34.133-67.776l-8.932-6.01-8.931,6.01C220,24.891,206.925,50.861,206.925,78.5a85.425,85.425,0,0,0,17.059,51.566H184v96H90a58.066,58.066,0,0,0-58,58V464a32.036,32.036,0,0,0,32,32H448a32.036,32.036,0,0,0,32-32V284.067A58.066,58.066,0,0,0,422,226.067ZM249.989,45.542c6.99,8.684,11.065,20.466,11.065,32.959s-4.075,24.276-11.065,32.959C243,102.777,238.925,90.994,238.925,78.5S243,54.226,249.989,45.542ZM216,162.067h64v64H216Zm-152,122a26.03,26.03,0,0,1,26-26H422a26.03,26.03,0,0,1,26,26l0,31.577L426.4,325.175a33.284,33.284,0,0,1-26.809,0L362,308.588l-37.6,16.586a33.283,33.283,0,0,1-26.81,0L260,308.587,222.4,325.173a33.279,33.279,0,0,1-26.81,0L158,308.588l-37.593,16.585a33.279,33.279,0,0,1-26.81,0L64,312.117ZM448,464H64V347.093l16.678,7.358a65.355,65.355,0,0,0,52.644,0L158,343.563l24.679,10.888a65.353,65.353,0,0,0,52.643,0L260,343.563l24.677,10.888a65.351,65.351,0,0,0,52.642,0L362,343.563l24.678,10.889a65.354,65.354,0,0,0,52.641,0l8.693-3.835L448.02,464Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-blind" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M374.906,253.877l11.36-10.328-109.911-120.9H207.863L163.585,151.4A60.364,60.364,0,0,0,136,202.2V274h32V202.2a28.477,28.477,0,0,1,13.013-23.967L208,160.712v93.836L313.7,474.929h32.942L272.714,315.7V166.214L347.342,248.3l82.409,226.626h25.537Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M214.7,96.861a34.081,34.081,0,1,0-10.871-24.949A33.96,33.96,0,0,0,214.7,96.861Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="132.796 474.929 167.261 474.929 224.775 331.144 205.982 291.963 132.796 474.929"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-bluetooth" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M150.627,376,232,294.627V496h38.627l120-120-120-120,120-120-120-120H232V217.373L150.627,136H105.373l120,120-120,120ZM264,54.627,345.373,136,264,217.373Zm0,240L345.373,376,264,457.373Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-blur-circular" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,16A240,240,0,0,0,86.294,425.705,240,240,0,0,0,425.706,86.294,238.432,238.432,0,0,0,256,16ZM403.078,403.078h0c-81.1,81.1-213.058,81.1-294.157,0s-81.1-213.057,0-294.156a208.238,208.238,0,0,1,294.157,0C484.177,190.021,484.177,321.979,403.078,403.078Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M197.483,242.382a46.332,46.332,0,1,0-32.776-13.555A46.206,46.206,0,0,0,197.483,242.382ZM187.334,185.9a14.354,14.354,0,1,1,0,20.3A14.311,14.311,0,0,1,187.334,185.9Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M314.517,242.382a46.344,46.344,0,1,0-32.777-79.109h0a46.332,46.332,0,0,0,32.777,79.108ZM304.367,185.9a14.354,14.354,0,1,1,0,20.3A14.371,14.371,0,0,1,304.367,185.9Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M164.707,283.173a46.353,46.353,0,1,0,65.553,0A46.048,46.048,0,0,0,164.707,283.173ZM207.633,326.1a14.347,14.347,0,1,1,0-20.3A14.372,14.372,0,0,1,207.633,326.1Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M281.74,283.173a46.354,46.354,0,1,0,65.553,0A46.406,46.406,0,0,0,281.74,283.173ZM324.666,326.1a14.354,14.354,0,1,1,4.2-10.15A14.372,14.372,0,0,1,324.666,326.1Z"
          className="ci-primary"
        />
        <circle
          cx="314.517"
          cy="98.5"
          r="29.637"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
          transform="rotate(-9.217 314.534 98.505)"
        />
        <circle
          cx="197.483"
          cy="98.5"
          r="29.637"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
          transform="rotate(-9.217 197.493 98.505)"
        />
        <circle
          cx="314.517"
          cy="413.5"
          r="29.637"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
          transform="rotate(-67.5 314.517 413.5)"
        />
        <circle
          cx="197.483"
          cy="413.5"
          r="29.637"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
          transform="rotate(-67.5 197.483 413.5)"
        />
        <circle
          cx="413.5"
          cy="314.517"
          r="29.637"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
          transform="rotate(-22.5 413.5 314.518)"
        />
        <circle
          cx="413.5"
          cy="197.483"
          r="29.637"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
          transform="rotate(-58.283 413.496 197.483)"
        />
        <circle
          cx="98.5"
          cy="314.517"
          r="29.637"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <circle
          cx="98.5"
          cy="197.483"
          r="29.637"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-blur-linear" viewBox="0 0 512 512">
        <rect
          width="480"
          height="32"
          x="16"
          y="16"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="480"
          height="32"
          x="16"
          y="464"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M87.371,231.467A71.371,71.371,0,1,0,16,160.1,71.45,71.45,0,0,0,87.371,231.467Zm0-110.741A39.371,39.371,0,1,1,48,160.1,39.415,39.415,0,0,1,87.371,120.726Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M274.311,231.467A59.467,59.467,0,1,0,214.843,172,59.533,59.533,0,0,0,274.311,231.467Zm0-86.934A27.467,27.467,0,1,1,246.843,172,27.5,27.5,0,0,1,274.311,144.533Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M435.516,215.468a29.637,29.637,0,1,0-29.637-29.637A29.637,29.637,0,0,0,435.516,215.468Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M87.371,427.35A71.371,71.371,0,1,0,16,355.979,71.451,71.451,0,0,0,87.371,427.35Zm0-110.742A39.371,39.371,0,1,1,48,355.979,39.415,39.415,0,0,1,87.371,316.608Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M274.311,403.543a59.468,59.468,0,1,0-59.468-59.467A59.534,59.534,0,0,0,274.311,403.543Zm0-86.935a27.468,27.468,0,1,1-27.468,27.468A27.5,27.5,0,0,1,274.311,316.608Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M435.516,359.882a29.637,29.637,0,1,0-29.637-29.637A29.637,29.637,0,0,0,435.516,359.882Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-blur" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M87.371,161.022A71.371,71.371,0,1,0,16,89.652,71.45,71.45,0,0,0,87.371,161.022Zm0-110.741A39.371,39.371,0,1,1,48,89.652,39.415,39.415,0,0,1,87.371,50.281Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M274.311,164.974a59.468,59.468,0,1,0-59.468-59.467A59.534,59.534,0,0,0,274.311,164.974Zm0-86.935a27.468,27.468,0,1,1-27.468,27.468A27.5,27.5,0,0,1,274.311,78.039Z"
          className="ci-primary"
        />
        <circle
          cx="435.516"
          cy="115.386"
          r="29.637"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M87.371,328.511A71.371,71.371,0,1,0,16,257.141,71.45,71.45,0,0,0,87.371,328.511Zm0-110.741A39.371,39.371,0,1,1,48,257.141,39.415,39.415,0,0,1,87.371,217.77Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M274.311,316.608a59.468,59.468,0,1,0-59.468-59.467A59.534,59.534,0,0,0,274.311,316.608Zm0-86.935a27.468,27.468,0,1,1-27.468,27.468A27.5,27.5,0,0,1,274.311,229.673Z"
          className="ci-primary"
        />
        <circle
          cx="435.516"
          cy="257.141"
          r="29.637"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M87.371,496A71.371,71.371,0,1,0,16,424.629,71.451,71.451,0,0,0,87.371,496Zm0-110.742A39.371,39.371,0,1,1,48,424.629,39.415,39.415,0,0,1,87.371,385.258Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M274.311,468.242a59.468,59.468,0,1,0-59.468-59.468A59.534,59.534,0,0,0,274.311,468.242Zm0-86.935a27.468,27.468,0,1,1-27.468,27.467A27.5,27.5,0,0,1,274.311,381.307Z"
          className="ci-primary"
        />
        <circle
          cx="435.516"
          cy="398.895"
          r="29.637"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-boat-alt" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M410.866,181.063A32.1,32.1,0,0,0,380.793,160H341.554l-16-96H221.112l16,96H197.554l-16-96H77.112l16,96H48v88H16V448H443.727L496,282.466V248H435.207ZM298.446,96l10.667,64H269.554L258.888,96Zm-144,0,10.667,64H125.554L114.888,96ZM80,192H380.793l20.363,56H80Zm383.222,88L420.273,416H48V280Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="80"
          y="320"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="144"
          y="320"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="208"
          y="320"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="272"
          y="320"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="336"
          y="320"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-bold" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M16,496H496V16H16ZM48,48H464V464H48Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M341.6,242.986A79.956,79.956,0,0,0,280,112H112v32h40V368H112v32H320a79.991,79.991,0,0,0,21.6-157.014ZM208,144h48a48,48,0,0,1,0,96H208Zm88,224H208V272h88a48,48,0,0,1,0,96Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-bolt-circle" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M425.706,86.294A240,240,0,0,0,86.294,425.706,240,240,0,0,0,425.706,86.294ZM256,464C141.309,464,48,370.691,48,256S141.309,48,256,48s208,93.309,208,208S370.691,464,256,464Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M372.529,120H180.468L121.8,296h76.047l-36.4,104h77.179L384,254.627V208H318.751ZM352,240v1.373L225.373,368H206.552l36.4-104H166.2l37.333-112H315.471l-53.778,88Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-bolt" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M331.464,192l77-176H147.879l-81,288H187.9L148.37,496h58.851L475.456,192ZM192.779,464H187.63l39.529-192H109.121l63-224H359.536l-77,176H404.545Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-book" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M101.667,400H464V16H100.667A60.863,60.863,0,0,0,40,76.667V430.25h.011c0,.151-.011.3-.011.453,0,35.4,27.782,65.3,60.667,65.3H464V464H100.667C85.664,464,72,448.129,72,430.7,72,414.06,85.585,400,101.667,400ZM360,48.333V221.149l-48.4-42.49L264,220.9V48.333ZM232,48V264h31.641l48.075-42.659L360.305,264H392V48h40V368H136.08L136,48ZM100.667,48H104l.076,320h-2.413A59.793,59.793,0,0,0,72,375.883V76.917A28.825,28.825,0,0,1,100.667,48Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-bookmark" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-border-all" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M56,472H456a16,16,0,0,0,16-16V56a16,16,0,0,0-16-16H56A16,16,0,0,0,40,56V456A16,16,0,0,0,56,472ZM272,72H440V240H272Zm0,200H440V440H272ZM72,72H240V240H72Zm0,200H240V440H72Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-border-bottom" viewBox="0 0 512 512">
        <rect
          width="432"
          height="32"
          x="40"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="40"
          y="306.183"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="40"
          y="373.092"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.455"
          x="40"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="40"
          y="172.364"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="40"
          y="105.455"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="40"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="306.182"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="172.364"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="373.091"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="239.272"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="105.455"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="440"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="440"
          y="373.091"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="440"
          y="306.182"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="440"
          y="105.454"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="440"
          y="172.363"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.455"
          x="440"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.455"
          x="239.272"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.454"
          x="239.272"
          y="306.182"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.454"
          x="239.272"
          y="172.363"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.454"
          x="239.272"
          y="105.454"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.454"
          x="239.272"
          y="373.091"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.455"
          x="306.182"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.455"
          x="373.091"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.455"
          x="172.364"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.455"
          x="105.455"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-border-clear" viewBox="0 0 512 512">
        <rect
          width="32"
          height="32"
          x="440"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="306.182"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="172.364"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="373.091"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="105.455"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="40"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="40"
          y="306.183"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="40"
          y="373.092"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.455"
          x="40"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="40"
          y="172.364"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="40"
          y="105.455"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="40"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="306.182"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="172.364"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="373.091"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="239.272"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="105.455"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="440"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="440"
          y="373.091"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="440"
          y="306.182"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="440"
          y="105.454"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="440"
          y="172.363"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.455"
          x="440"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.455"
          x="239.272"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.454"
          x="239.272"
          y="306.182"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.454"
          x="239.272"
          y="172.363"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.454"
          x="239.272"
          y="105.454"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.454"
          x="239.272"
          y="373.091"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="239.272"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.455"
          x="306.182"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.455"
          x="373.091"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.455"
          x="172.364"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.455"
          x="105.455"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-border-horizontal" viewBox="0 0 512 512">
        <rect
          width="432"
          height="32"
          x="40"
          y="240"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="440"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="306.182"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="172.364"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="373.091"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="105.455"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="40"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="40"
          y="306.183"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="40"
          y="373.092"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="40"
          y="172.364"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="40"
          y="105.455"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="40"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="306.182"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="172.364"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="373.091"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="239.272"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="105.455"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="440"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="440"
          y="373.091"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="440"
          y="306.182"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="440"
          y="105.454"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="440"
          y="172.363"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.454"
          x="239.272"
          y="306.182"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.454"
          x="239.272"
          y="172.363"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.454"
          x="239.272"
          y="105.454"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.454"
          x="239.272"
          y="373.091"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="239.272"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-border-inner" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="240 272 240 440 240 472 272 472 272 440 272 272 440 272 472 272 472 240 440 240 272 240 272 72 272 40 240 40 240 72 240 240 72 240 40 240 40 272 72 272 240 272"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="440"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="306.182"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="172.364"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="373.091"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="105.455"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="40"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="40"
          y="306.183"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="40"
          y="373.092"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="40"
          y="172.364"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="40"
          y="105.455"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="40"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="306.182"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="172.364"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="373.091"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="105.455"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="440"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="440"
          y="373.091"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="440"
          y="306.182"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="440"
          y="105.454"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="440"
          y="172.363"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-border-left" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="72 440 72 406.546 72 373.092 72 339.637 72 306.183 72 272.728 72 272 72 240 72 239.273 72 205.818 72 172.364 72 138.909 72 105.455 72 72 72 40 40 40 40 72 40 105.455 40 138.909 40 172.364 40 205.818 40 239.273 40 272.728 40 306.183 40 339.637 40 373.092 40 406.546 40 440 40 472 72 472 72 440"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="440"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="306.182"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="172.364"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="373.091"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="105.455"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="306.182"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="172.364"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="373.091"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="239.272"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="105.455"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="440"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="440"
          y="373.091"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="440"
          y="306.182"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="440"
          y="105.454"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="440"
          y="172.363"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.455"
          x="440"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.455"
          x="239.272"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.454"
          x="239.272"
          y="306.182"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.454"
          x="239.272"
          y="172.363"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.454"
          x="239.272"
          y="105.454"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.454"
          x="239.272"
          y="373.091"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="239.272"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.455"
          x="306.182"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.455"
          x="373.091"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.455"
          x="172.364"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.455"
          x="105.455"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-border-outer" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M56,40A16,16,0,0,0,40,56V456a16,16,0,0,0,16,16H456a16,16,0,0,0,16-16V56a16,16,0,0,0-16-16ZM440,440H72V72H440Z"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.455"
          x="239.272"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.454"
          x="239.272"
          y="306.182"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.454"
          x="239.272"
          y="172.363"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.454"
          x="239.272"
          y="105.454"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.454"
          x="239.272"
          y="373.091"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.455"
          x="306.182"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.455"
          x="373.091"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.455"
          x="172.364"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.455"
          x="105.455"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-border-right" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="472 440 472 406.545 472 373.091 472 339.636 472 306.182 472 272.727 472 239.272 472 205.817 472 172.363 472 138.908 472 105.454 472 72 472 40 440 40 440 72 440 105.454 440 138.908 440 172.363 440 205.817 440 239.272 440 240 440 272 440 272.727 440 306.182 440 339.636 440 373.091 440 406.545 440 440 440 472 472 472 472 440"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="306.182"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="172.364"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="373.091"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="105.455"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="40"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="40"
          y="306.183"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="40"
          y="373.092"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.455"
          x="40"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="40"
          y="172.364"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="40"
          y="105.455"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="40"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="306.182"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="172.364"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="373.091"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="239.272"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="105.455"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.455"
          x="239.272"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.454"
          x="239.272"
          y="306.182"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.454"
          x="239.272"
          y="172.363"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.454"
          x="239.272"
          y="105.454"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.454"
          x="239.272"
          y="373.091"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="239.272"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.455"
          x="306.182"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.455"
          x="373.091"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.455"
          x="172.364"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.455"
          x="105.455"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-border-style" viewBox="0 0 512 512">
        <rect
          width="32"
          height="32"
          x="440"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="306.182"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="172.364"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="373.091"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="105.455"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M472,40H56A16,16,0,0,0,40,56V472H72V72H472Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="440"
          y="373.091"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="440"
          y="306.182"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="440"
          y="105.454"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="440"
          y="172.363"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.455"
          x="440"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="239.272"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-border-top" viewBox="0 0 512 512">
        <rect
          width="432"
          height="32"
          x="40"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="440"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="306.182"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="172.364"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="373.091"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="105.455"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="40"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="40"
          y="306.183"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="40"
          y="373.092"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.455"
          x="40"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="40"
          y="172.364"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="40"
          y="105.455"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="440"
          y="373.091"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="440"
          y="306.182"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="440"
          y="105.454"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="440"
          y="172.363"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.455"
          x="440"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.455"
          x="239.272"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.454"
          x="239.272"
          y="306.182"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.454"
          x="239.272"
          y="172.363"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.454"
          x="239.272"
          y="105.454"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.454"
          x="239.272"
          y="373.091"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="239.272"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.455"
          x="306.182"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.455"
          x="373.091"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.455"
          x="172.364"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.455"
          x="105.455"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-border-vertical" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="272 456 272 440 272 406.545 272 373.091 272 339.636 272 306.182 272 272.727 272 272 272 240 272 239.272 272 205.817 272 172.363 272 138.908 272 105.454 272 72 272 56 272 40 240 40 240 56 240 72 240 105.454 240 138.908 240 172.363 240 205.817 240 239.272 240 240 240 272 240 272.727 240 306.182 240 339.636 240 373.091 240 406.545 240 440 240 456 240 472 272 472 272 456"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="440"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="306.182"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="172.364"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="373.091"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="105.455"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="40"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="40"
          y="306.183"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="40"
          y="373.092"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.455"
          x="40"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="40"
          y="172.364"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="40"
          y="105.455"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="40"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="306.182"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="172.364"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="373.091"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="32"
          x="105.455"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="440"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="440"
          y="373.091"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="440"
          y="306.182"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="440"
          y="105.454"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="440"
          y="172.363"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.455"
          x="440"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.455"
          x="306.182"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.455"
          x="373.091"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.455"
          x="172.364"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="33.455"
          height="33.455"
          x="105.455"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-bowling" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M312,128a183.645,183.645,0,0,0-139.789,64.5c-1.705-3.805-3.468-7.589-5.325-11.339l11.369-90.005a66.782,66.782,0,1,0-132.51,0l11.369,90.005A323.1,323.1,0,0,0,38.356,420.972L61.843,496H162.157l17.6-56.207A183.469,183.469,0,0,0,312,496c101.458,0,184-82.542,184-184S413.458,128,312,128ZM85.91,59.78a34.781,34.781,0,0,1,60.6,27.361L136.294,168H87.706L77.493,87.141A34.8,34.8,0,0,1,85.91,59.78ZM155.1,411.412,138.643,464H85.357L68.9,411.412A289.239,289.239,0,0,1,83.562,200h56.876q5.58,11.776,10.075,23.879a183.66,183.66,0,0,0,5.278,185.244C155.559,409.886,155.343,410.651,155.1,411.412ZM312,464c-83.813,0-152-68.187-152-152s68.187-152,152-152,152,68.187,152,152S395.813,464,312,464Z"
          className="ci-primary"
        />
        <circle
          cx="312"
          cy="224"
          r="24"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <circle
          cx="384"
          cy="272"
          r="24"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <circle
          cx="304"
          cy="304"
          r="24"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-braille" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M112,192a48,48,0,1,0-48,48A48.055,48.055,0,0,0,112,192Zm-64,0a16,16,0,1,1,16,16A16.019,16.019,0,0,1,48,192Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M320,240a48,48,0,1,0-48-48A48.055,48.055,0,0,0,320,240Zm0-64a16,16,0,1,1-16,16A16.019,16.019,0,0,1,320,176Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M184,112a48,48,0,1,0-48-48A48.055,48.055,0,0,0,184,112Zm0-64a16,16,0,1,1-16,16A16.019,16.019,0,0,1,184,48Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M448,144a48,48,0,1,0,48,48A48.055,48.055,0,0,0,448,144Zm0,64a16,16,0,1,1,16-16A16.019,16.019,0,0,1,448,208Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M448,112a48,48,0,1,0-48-48A48.055,48.055,0,0,0,448,112Zm0-64a16,16,0,1,1-16,16A16.019,16.019,0,0,1,448,48Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M320,112a48,48,0,1,0-48-48A48.055,48.055,0,0,0,320,112Zm0-64a16,16,0,1,1-16,16A16.019,16.019,0,0,1,320,48Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M376,320a47.691,47.691,0,0,0-23.549,6.184,47.958,47.958,0,0,0-64-16A47.991,47.991,0,0,0,232,290.742V248a48,48,0,0,0-96,0v96.038A79.6,79.6,0,0,0,88,328a24.028,24.028,0,0,0-24,24V496H96V360.667A48.078,48.078,0,0,1,136,408v16h32V248a16,16,0,0,1,32,0V424h32V336a16,16,0,0,1,32,0v88h32V352a16,16,0,0,1,32,0v72h32V368a16,16,0,0,1,32,0V496h32V368A48.055,48.055,0,0,0,376,320Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-briefcase" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M471.232,111.731H368V16H144.232v95.731h-103A24.8,24.8,0,0,0,16.464,136.5V470.532A24.8,24.8,0,0,0,41.232,495.3h430A24.8,24.8,0,0,0,496,470.532V136.5A24.8,24.8,0,0,0,471.232,111.731ZM176.232,48H336v63.731H176.232Zm286.232,97.269v80.286l-53.177,53.176H273V232H239.464v46.731H103.177L50,225.555V145.269ZM50,461.764V272.982l39.286,39.287H239.464V359.5H273V312.269H423.178l39.286-39.287V461.764Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-brightness" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M78.462,253.835l52.522,43.279,6.26,14.276-8.312,68.617,67.742-6.535,14.52,5.668,42.642,54.4,43.28-52.523,14.274-6.259,68.618,8.313-6.536-67.743,5.667-14.519,54.4-42.642-52.522-43.279-6.26-14.276,8.312-68.618-67.741,6.536-14.52-5.667-42.642-54.4-43.279,52.522-14.277,6.26-68.616-8.312,6.536,67.74-5.669,14.522Zm81.026-22.854L171.114,201.2l-3.446-35.709,37.779,4.576,29.281-12.839,22.814-27.687,23.479,29.951L310.8,171.113l35.71-3.445-4.577,37.78,12.839,29.28,27.687,22.814-29.951,23.479L340.887,310.8l3.446,35.712-37.781-4.577-29.278,12.838-22.815,27.688-23.479-29.95L201.2,340.887l-35.711,3.446,4.577-37.781-12.839-29.28-27.687-22.814Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M472,16H40A24.028,24.028,0,0,0,16,40V472a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V40A24.028,24.028,0,0,0,472,16Zm-8,448H48V48H464Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-british-pound" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M375.942,160a88.042,88.042,0,0,0-176.033,3.024v76.588H136v32h63.909v120.3H136v32H376v-32H231.909v-120.3H344v-32H231.909V163.024a56.046,56.046,0,0,1,112.091,0V168h32v-8Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-browser" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M472,40H40A24.028,24.028,0,0,0,16,64V448a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V64A24.028,24.028,0,0,0,472,40ZM48,72h96v72H48ZM464,440H48V176H464Zm0-296H176V72H464Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-brush-alt" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M56,256V496H456V256a48.055,48.055,0,0,0-48-48H321.383l13.075-106.263.068-.677a78.777,78.777,0,1,0-157.052,0l.027.338L190.617,208H104A48.055,48.055,0,0,0,56,256ZM424,464H88V320H424ZM226.8,240,209.348,98.192a46.777,46.777,0,1,1,93.3,0L285.205,240H408a16.019,16.019,0,0,1,16,16v32H88V256a16.019,16.019,0,0,1,16-16Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-brush" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M416.941,27.429,185.407,219.3c-1.711-.078-3.421-.13-5.124-.13h-.025A113.878,113.878,0,0,0,71.786,297.825L18.3,461.387A26.873,26.873,0,0,0,43.771,496.6a27.007,27.007,0,0,0,8.4-1.345l163.562-53.483A113.877,113.877,0,0,0,294.388,333.3h0c0-2.518-.095-5.048-.263-7.575L485.119,95.668a48.44,48.44,0,0,0-68.178-68.239ZM205.786,411.355,51.873,461.684,102.2,307.771a81.946,81.946,0,0,1,78.06-56.6c2.271,0,4.559.1,6.841.285l75,75c.189,2.281.285,4.568.285,6.842A81.946,81.946,0,0,1,205.786,411.355ZM460.5,75.227,277.382,295.791,216.6,235.009,437.359,52.067A16.44,16.44,0,0,1,460.5,75.227Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-bug" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M496.059,182.581l-.025-70.7-32,.012.017,48.172-66.288,23.779-45.729.007V152.887A96.554,96.554,0,0,0,329.92,91.3l43.129-43.413h42.84v-32H359.732L305.745,70.231a96.815,96.815,0,0,0-100.511-.554l-53.056-53.84-56.158.05.029,32,42.748-.038L180.824,90.5a96.564,96.564,0,0,0-22.79,62.39V183.88l-43.235.007L48,160.093V111.921H16v70.742l80.035,28.509.007,84.715H16.034v32h80.01v8.01a159.741,159.741,0,0,0,9.7,54.979L16.034,425.448v70.439h32V447.411l71.73-27.642a159.794,159.794,0,0,0,249.578,29.044A161.477,161.477,0,0,0,392.4,419.667l71.638,27.727v48.493h32V425.466L406.42,390.781a159.178,159.178,0,0,0,9.614-55.1v-7.794h80v-32h-80v-84.6ZM240,463.029C176.991,455.235,128.045,401.2,128.045,335.9l-.01-120.011,30,0v.007H240ZM190.034,183.875V152.887a65,65,0,0,1,130,0v30.968Zm194,151.849A128.282,128.282,0,0,1,272,462.979V215.887h80.032v-.036l32,0Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-building" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M440,464V16H72V464H16v32H496V464Zm-32,0H272V400H240v64H104V48H408Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="160"
          y="304"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="240"
          y="304"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="320"
          y="304"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="160"
          y="208"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="240"
          y="208"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="320"
          y="208"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="160"
          y="112"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="240"
          y="112"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="320"
          y="112"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-bullhorn" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M429,15.933l-253.574,120H15.992V347.661L68.184,495.928H182.838l-46.56-128h35.847L431.182,496h64.735L496,15.933Zm-269.009,320H103.966l.061,36.949,33.119,91.051h-46.3L47.992,342.193V167.928h112Zm32.125-172.495L367.992,80.205V429.063L192.117,342.114ZM463.923,464H438.66l-38.668-19.117V65.063l36.2-17.13h27.8Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-burger" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M412.717,89.012c-35.578-20.985-82.545-32.541-132.246-32.541H239.529c-49.7,0-96.668,11.556-132.246,32.541C69.054,111.56,48,142.453,48,176v16H472V176C472,142.453,450.946,111.56,412.717,89.012ZM82.8,160c14.153-40.121,80.185-71.529,156.731-71.529h40.942c76.546,0,142.578,31.408,156.731,71.529Z"
          className="ci-primary"
        />
        <rect
          width="424"
          height="32"
          x="48"
          y="304"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M387.2,224.039c-24.785,0-37.77,6.125-49.227,11.529-10.034,4.733-17.96,8.471-35.576,8.471s-25.54-3.738-35.574-8.471c-11.456-5.4-24.441-11.529-49.225-11.529s-37.769,6.125-49.225,11.529c-10.033,4.733-17.957,8.471-35.572,8.471s-25.54-3.738-35.573-8.471c-11.456-5.4-24.441-11.529-49.225-11.529v32c17.615,0,25.54,3.738,35.573,8.471,11.456,5.4,24.441,11.529,49.225,11.529s37.768-6.125,49.224-11.529c10.033-4.733,17.958-8.471,35.573-8.471s25.54,3.738,35.573,8.471c11.457,5.4,24.441,11.529,49.226,11.529s37.77-6.125,49.227-11.529c10.034-4.733,17.959-8.471,35.576-8.471s25.542,3.738,35.576,8.471c11.457,5.4,24.442,11.529,49.227,11.529v-32c-17.617,0-25.542-3.738-35.576-8.471C424.967,230.164,411.982,224.039,387.2,224.039Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M48,448a24.028,24.028,0,0,0,24,24H448a24.028,24.028,0,0,0,24-24V368H48Zm32-48H440v40H80Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-burn" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M311.145,257.6c5.5-9.032,11.185-18.371,16.8-28,18.794-32.218,22.243-64.681,10.254-96.489C314.008,68.933,233.142,29.83,214.421,23.591L201.257,19.2,180.711,60.3l9.915,8.1c.111.089,11.124,9.712,11.858,24.3.627,12.453-6.2,25.91-20.286,40-9.782,9.781-20.518,19.239-31.885,29.251C102.487,204.069,48.28,251.82,48.28,342.154q0,1.861.035,3.7a151.362,151.362,0,0,0,46.444,106.49A154.177,154.177,0,0,0,202.583,496h92.1l-11.369-23.072C237.121,379.177,269.788,325.525,311.145,257.6ZM202.583,464c-66.2,0-121.05-53.267-122.274-118.739q-.028-1.546-.029-3.107c0-75.878,46.356-116.713,91.186-156.2,11.239-9.9,22.862-20.138,33.359-30.637,20.754-20.753,30.719-42.365,29.619-64.232a64.963,64.963,0,0,0-7.214-26.56c27.84,15.211,67.523,44.053,81.027,79.877,8.544,22.665,5.943,45.26-7.951,69.079-5.465,9.369-11.072,18.576-16.493,27.481C244.132,306.131,206.49,367.943,244.361,464Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M468.243,341.129q-.4-1.586-.834-3.185c-11.546-42.332-75.457-96.762-82.706-102.829l-14.557-12.182L360.6,239.341c-21.753,37.4-40.421,71.512-48.559,110.212-9.279,44.134-3.033,88.989,19.1,137.13L335.422,496H346.3a125.168,125.168,0,0,0,99.3-48.5A123.175,123.175,0,0,0,468.243,341.129Zm-47.88,86.683a93.3,93.3,0,0,1-64.44,35.7c-31.541-75.9-12.931-127.635,22.63-191.114,23.642,21.994,52.455,53.69,57.983,73.961q.349,1.283.669,2.554A91.372,91.372,0,0,1,420.363,427.812Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-bus-alt" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M441.884,109.647A32.029,32.029,0,0,0,415.669,96H48a32.036,32.036,0,0,0-32,32V376H57.082a67.982,67.982,0,0,0,133.836,0H313.082a67.982,67.982,0,0,0,133.836,0H496V194.521a23.886,23.886,0,0,0-4.338-13.763ZM180,128H324v96H180ZM48,128H148v96H48Zm76,272a36,36,0,1,1,36-36A36.04,36.04,0,0,1,124,400Zm256,0a36,36,0,1,1,36-36A36.04,36.04,0,0,1,380,400Zm84-56H444.994a68,68,0,0,0-129.988,0H188.994a68,68,0,0,0-129.988,0H48V256H464Zm0-120H356V128h59.669L464,197.043Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-calculator" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M472,40H40A24.028,24.028,0,0,0,16,64V448a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V64A24.028,24.028,0,0,0,472,40Zm-8,400H48V72H464Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="152 240 184 240 184 200 224 200 224 168 184 168 184 128 152 128 152 168 112 168 112 200 152 200 152 240"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="196.284 285.089 168 313.373 139.716 285.089 117.089 307.716 145.373 336 117.089 364.284 139.716 386.911 168 358.627 196.284 386.911 218.911 364.284 190.627 336 218.911 307.716 196.284 285.089"
          className="ci-primary"
        />
        <rect
          width="112"
          height="32"
          x="288"
          y="168"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="112"
          height="32"
          x="288"
          y="288"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="112"
          height="32"
          x="288"
          y="352"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-calendar-check" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M472,96H384V40H352V96H160V40H128V96H40a24.028,24.028,0,0,0-24,24V456a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V120A24.028,24.028,0,0,0,472,96Zm-8,352H48V128h80v40h32V128H352v40h32V128h80Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="243.397 313.373 189.012 258.988 166.385 281.616 243.397 358.627 369.012 233.012 346.384 210.385 243.397 313.373"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-calendar" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M472,96H384V40H352V96H160V40H128V96H40a24.028,24.028,0,0,0-24,24V456a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V120A24.028,24.028,0,0,0,472,96Zm-8,352H48V128h80v40h32V128H352v40h32V128h80Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="112"
          y="224"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="200"
          y="224"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="280"
          y="224"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="368"
          y="224"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="112"
          y="296"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="200"
          y="296"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="280"
          y="296"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="368"
          y="296"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="112"
          y="368"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="200"
          y="368"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="280"
          y="368"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="368"
          y="368"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-camera-control" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M336,256a80,80,0,1,0-80,80A80.091,80.091,0,0,0,336,256Zm-128,0a48,48,0,1,1,48,48A48.055,48.055,0,0,1,208,256Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M160,397.988,245.307,496h21.386L352,397.988V368H160ZM307.825,400,256,459.544,204.175,400Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M245.307,16,160,114.012V144H352V114.012L266.693,16Zm-41.132,96L256,52.456,307.825,112Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M16,245.307v21.386L114.013,352H144V160H114.013Zm96,62.519L52.455,256,112,204.174Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M397.987,160H368V352h29.987L496,266.693V245.307ZM400,307.826V204.174L459.545,256Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-camera-roll" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M328,104a32.036,32.036,0,0,0-32-32H280V48a32.036,32.036,0,0,0-32-32H96A32.036,32.036,0,0,0,64,48V72H48a32.036,32.036,0,0,0-32,32V464a32.036,32.036,0,0,0,32,32H296a32.036,32.036,0,0,0,32-32V440H496V136H328Zm136,64V408H296v56H48V104H96V48H248v56h48v64Z"
          className="ci-primary"
        />
        <rect
          width="40"
          height="40"
          x="392"
          y="200"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="40"
          height="40"
          x="320"
          y="200"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="40"
          height="40"
          x="248"
          y="200"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="40"
          height="40"
          x="392"
          y="336"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="40"
          height="40"
          x="320"
          y="336"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="40"
          height="40"
          x="248"
          y="336"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="40"
          height="40"
          x="176"
          y="200"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="40"
          height="40"
          x="176"
          y="336"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-camera" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M471.993,112h-89.2L366.551,65.25a32.023,32.023,0,0,0-30.229-21.5H175.241a31.991,31.991,0,0,0-30.294,21.691L129.1,112h-89.1a24.027,24.027,0,0,0-24,24V448a24.027,24.027,0,0,0,24,24H471.993a24.027,24.027,0,0,0,24-24V136A24.027,24.027,0,0,0,471.993,112Zm-8,328H48.007V144h104.01l23.224-68.25H336.322L360.032,144H463.993Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,168A114,114,0,1,0,370,282,114.13,114.13,0,0,0,256,168Zm0,196a82,82,0,1,1,82-82A82.093,82.093,0,0,1,256,364Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-car-alt" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M475.656,223.142l-90.272-13.908-55.013-89.87a32.07,32.07,0,0,0-27.548-15.291L72.265,105.91A32.018,32.018,0,0,0,42.2,127.684L16,205.375V384H71.006a68,68,0,0,0,129.988,0H303.006a68,68,0,0,0,129.988,0H496V246.862A23.873,23.873,0,0,0,475.656,223.142ZM224,136.7l79.078-.63,44.1,72.047L224,208.074ZM72.521,137.908,192,136.956v71.107l-143.119-.051ZM136,400a36,36,0,1,1,36-36A36.04,36.04,0,0,1,136,400Zm232,0a36,36,0,1,1,36-36A36.04,36.04,0,0,1,368,400Zm96-48H434.918a67.982,67.982,0,0,0-133.836,0H202.918a67.982,67.982,0,0,0-133.836,0H48V240.026l330.526.529L464,253.724Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-caret-bottom" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256.286,408.357,16.333,138.548V104H496v36.45ZM56.892,136,256.358,360.287,457.042,136Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-caret-left" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M400.358,496h-36.45L96,256.286,365.811,16.333h34.547ZM144.071,256.358,368.358,457.042V56.892Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-caret-right" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M148.092,496h-36.45V16.333h34.547L416,256.286Zm-4.45-439.108v400.15L367.929,256.358Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-caret-top" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M496,400.357H16.333V363.908L256.047,96,496,365.81Zm-440.708-32H455.441L255.975,144.07Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-cart" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-cash" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M432,64H16V384H432ZM400,352H48V96H400Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="464 144 464 416 96 416 96 448 496 448 496 144 464 144"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M224,302.46c39.7,0,72-35.137,72-78.326s-32.3-78.326-72-78.326-72,35.136-72,78.326S184.3,302.46,224,302.46Zm0-124.652c22.056,0,40,20.782,40,46.326s-17.944,46.326-40,46.326-40-20.782-40-46.326S201.944,177.808,224,177.808Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="176"
          x="80"
          y="136"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="176"
          x="336"
          y="136"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-casino" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M495.24,267.592,445.066,41.083A32.038,32.038,0,0,0,406.9,16.76L180.393,66.934A32,32,0,0,0,156.071,105.1L177.092,200H48a32.036,32.036,0,0,0-32,32V464a32.036,32.036,0,0,0,32,32H280a32.036,32.036,0,0,0,32-32V340.957l158.917-35.2A32.038,32.038,0,0,0,495.24,267.592ZM280,464H48V232H184.181l22.063,99.606a32.031,32.031,0,0,0,31.18,25.092,32.3,32.3,0,0,0,6.984-.769l35.6-7.886L280.02,464ZM464,274.513,237.487,324.686,187.314,98.176,413.824,48l50.193,226.505Z"
          className="ci-primary"
        />
        <rect
          width="40"
          height="40"
          x="80"
          y="264"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="40"
          height="40"
          x="80"
          y="392"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="40"
          height="40"
          x="208"
          y="392"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="40"
          height="40"
          x="144"
          y="328"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="40"
          height="40"
          x="229.329"
          y="117.7"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
          transform="rotate(-12.48 249.647 137.846)"
        />
        <rect
          width="40"
          height="40"
          x="381.981"
          y="214.989"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
          transform="rotate(-12.489 401.996 234.995)"
        />
        <rect
          width="40"
          height="40"
          x="305.655"
          y="166.345"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
          transform="rotate(-12.49 325.645 186.34)"
        />
      </symbol>
      <symbol id="cil-cast" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M16,360h0v64H80A64,64,0,0,0,16,360Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M472,80H40a24.028,24.028,0,0,0-24,24v72H48V112H464V392H264v32H472a24.028,24.028,0,0,0,24-24V104A24.028,24.028,0,0,0,472,80Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M16,216v32c97.047,0,176,78.953,176,176h32C224,309.309,130.691,216,16,216Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M16,288v32A104.118,104.118,0,0,1,120,424h32C152,349.009,90.991,288,16,288Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-cat" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M374.762,186.866h0a54.1,54.1,0,0,0-51.305-36.706H280V21.552l-18.263,2.609c-41.429,5.918-73.7,26.912-95.907,62.4-16.011,25.581-23.454,53.8-26.908,74.906-23.847,18.348-44.593,43.611-61.738,75.2-14.449,26.618-26.41,57.816-35.552,92.729-15.447,58.99-17.538,107.921-17.619,109.975L24.005,496H56V440.364c.4-8.231,10.476-188.35,107.032-256.936l5.66-4.021.93-6.881C174.437,136.9,191.077,78.058,248,59.971V182.16h75.457a22.12,22.12,0,0,1,21,14.974h0c12.757,37.656,34.677,84.777,68.839,106.921l-10.274,38.528a62.688,62.688,0,0,1-62.54,46.87c-28.668-.86-58.506,2.88-88.689,11.111L240,403.779V496h32V428.468a265.353,265.353,0,0,1,67.52-7.03,94.97,94.97,0,0,0,94.418-70.61l17.088-64.081L438.3,281.293C414.5,271.093,391.936,237.558,374.762,186.866Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-cc" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M472,64H40A24.028,24.028,0,0,0,16,88V424a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V88A24.028,24.028,0,0,0,472,64Zm-8,352H48V96H464Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M184,344a87.108,87.108,0,0,0,54.484-18.891L218.659,299.99A55.41,55.41,0,0,1,184,312a56,56,0,0,1,0-112,55.41,55.41,0,0,1,34.659,12.01l19.825-25.119A87.108,87.108,0,0,0,184,168a88,88,0,0,0,0,176Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M347.429,344a87.108,87.108,0,0,0,54.484-18.891L382.088,299.99A55.414,55.414,0,0,1,347.429,312a56,56,0,0,1,0-112,55.414,55.414,0,0,1,34.659,12.01l19.825-25.119A87.108,87.108,0,0,0,347.429,168a88,88,0,0,0,0,176Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-center-focus" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M64,496H184V464H64a16.019,16.019,0,0,1-16-16V328H16V448A48.054,48.054,0,0,0,64,496Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M48,64A16.019,16.019,0,0,1,64,48H184V16H64A48.054,48.054,0,0,0,16,64V184H48Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M448,16H328V48H448a16.019,16.019,0,0,1,16,16V184h32V64A48.054,48.054,0,0,0,448,16Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M464,448a16.019,16.019,0,0,1-16,16H328v32H448a48.054,48.054,0,0,0,48-48V328H464Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M400,256c0-79.4-64.6-144-144-144S112,176.6,112,256s64.6,144,144,144S400,335.4,400,256ZM256,368A112,112,0,1,1,368,256,112.127,112.127,0,0,1,256,368Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-chart-line" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="376 160 376 192 441.372 192 252 381.373 180 309.373 76.686 412.686 99.314 435.314 180 354.627 252 426.627 464 214.628 464 280 496 280 496 160 376 160"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="48 104 16 104 16 496 496 496 496 464 48 464 48 104"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-chart-pie" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M105.361,398.32A195.891,195.891,0,0,1,343.42,91.125L366.676,67.87A227.875,227.875,0,0,0,82.733,420.948,228.027,228.027,0,0,0,366.24,452.1l-23.312-23.312C267.9,472.768,169.657,462.617,105.361,398.32Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M468.916,353.07a243.542,243.542,0,0,0,0-186.459c-.885-2.136-1.806-4.251-2.747-6.354A242.246,242.246,0,0,0,416.11,87.571L404.8,76.257,393.483,87.571,221.213,259.84l172.63,172.631L404.8,443.424,416.11,432.11a242.218,242.218,0,0,0,49.452-71.358C466.716,358.212,467.844,355.657,468.916,353.07ZM404.359,121.95a211.57,211.57,0,0,1,0,275.781L266.468,259.84Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-chart" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M124,136H36a20.023,20.023,0,0,0-20,20V476a20.023,20.023,0,0,0,20,20h88a20.023,20.023,0,0,0,20-20V156A20.023,20.023,0,0,0,124,136ZM112,464H48V168h64Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M300,240H212a20.023,20.023,0,0,0-20,20V476a20.023,20.023,0,0,0,20,20h88a20.023,20.023,0,0,0,20-20V260A20.023,20.023,0,0,0,300,240ZM288,464H224V272h64Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M476,16H388a20.023,20.023,0,0,0-20,20V476a20.023,20.023,0,0,0,20,20h88a20.023,20.023,0,0,0,20-20V36A20.023,20.023,0,0,0,476,16ZM464,464H400V48h64Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-chat-bubble" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M448.205,392.507c30.519-27.2,47.8-63.455,47.8-101.078,0-39.984-18.718-77.378-52.707-105.3C410.218,158.963,366.432,144,320,144s-90.218,14.963-123.293,42.131C162.718,214.051,144,251.445,144,291.429s18.718,77.378,52.707,105.3c33.075,27.168,76.861,42.13,123.293,42.13,6.187,0,12.412-.273,18.585-.816l10.546,9.141A199.849,199.849,0,0,0,480,496h16V461.943l-4.686-4.685A199.17,199.17,0,0,1,448.205,392.507ZM370.089,423l-21.161-18.341-7.056.865A180.275,180.275,0,0,1,320,406.857c-79.4,0-144-51.781-144-115.428S240.6,176,320,176s144,51.781,144,115.429c0,31.71-15.82,61.314-44.546,83.358l-9.215,7.071,4.252,12.035a231.287,231.287,0,0,0,37.882,67.817A167.839,167.839,0,0,1,370.089,423Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M60.185,317.476a220.491,220.491,0,0,0,34.808-63.023l4.22-11.975-9.207-7.066C62.918,214.626,48,186.728,48,156.857,48,96.833,109.009,48,184,48c55.168,0,102.767,26.43,124.077,64.3,3.957-.192,7.931-.3,11.923-.3q12.027,0,23.834,1.167c-8.235-21.335-22.537-40.811-42.2-56.961C270.072,30.279,228.3,16,184,16S97.928,30.279,66.364,56.206C33.886,82.885,16,118.63,16,156.857c0,35.8,16.352,70.295,45.25,96.243a188.4,188.4,0,0,1-40.563,60.729L16,318.515V352H32a190.643,190.643,0,0,0,85.231-20.125,157.3,157.3,0,0,1-5.071-33.645A158.729,158.729,0,0,1,60.185,317.476Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-check-alt" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="200.359 382.269 61.057 251.673 82.943 228.327 199.641 337.731 428.686 108.687 451.314 131.313 200.359 382.269"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-check-circle" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-check" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M199.066,456l-7.379-7.514-3.94-3.9-86.2-86.2.053-.055L17.936,274.665l97.614-97.613,83.565,83.565L398.388,61.344,496,158.958,296.729,358.229,285.469,369.6ZM146.6,358.183l52.459,52.46.1-.1.054.054,52.311-52.311,11.259-11.368L450.746,158.958,398.388,106.6,199.115,305.871,115.55,222.306,63.191,274.665l83.464,83.463Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-chevron-bottom" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256.072,424l-11.421-11.313-85.808-85.809.053-.054L16,183.928l97.122-97.122,142.9,142.9,142.9-142.9,97.122,97.122L353.243,326.722l-11.361,11.469Zm-.107-45.254.054.053,51.835-51.835L319.2,315.511,450.783,183.928,398.915,132.06l-142.9,142.9-142.9-142.9L61.254,183.928l142.9,142.9-.053.054Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-chevron-circle-down-alt" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,496A240,240,0,0,1,86.294,86.294,240,240,0,0,1,425.706,425.706,238.43,238.43,0,0,1,256,496Zm0-448C141.309,48,48,141.309,48,256s93.309,208,208,208,208-93.309,208-208S370.691,48,256,48Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="256 342.627 132.687 219.313 155.313 196.687 256 297.372 356.687 196.687 379.313 219.313 256 342.627"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-chevron-circle-left-alt" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,496A240,240,0,0,1,86.294,86.294,240,240,0,0,1,425.706,425.706,238.43,238.43,0,0,1,256,496Zm0-448C141.309,48,48,141.309,48,256s93.309,208,208,208,208-93.309,208-208S370.691,48,256,48Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="284.687 379.313 161.373 256 284.687 132.687 307.313 155.313 206.628 256 307.313 356.687 284.687 379.313"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-chevron-circle-right-alt" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,496A240,240,0,0,1,86.294,86.294,240,240,0,0,1,425.706,425.706,238.43,238.43,0,0,1,256,496Zm0-448C141.309,48,48,141.309,48,256s93.309,208,208,208,208-93.309,208-208S370.691,48,256,48Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="227.313 379.313 204.687 356.687 305.372 256 204.687 155.313 227.313 132.687 350.627 256 227.313 379.313"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-chevron-circle-up-alt" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,496A240,240,0,0,1,86.294,86.294,240,240,0,0,1,425.706,425.706,238.432,238.432,0,0,1,256,496Zm0-448C141.309,48,48,141.309,48,256s93.309,208,208,208,208-93.309,208-208S370.691,48,256,48Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="356.686 315.313 256 214.628 155.314 315.313 132.686 292.687 256 169.373 379.314 292.687 356.686 315.313"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-chevron-double-down" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M252.482,345.034,143.462,236.013,64,315.475,173.087,424.563l-.041.041,68.082,68.082,11.354,11.273.041.041,68.15-68.148,11.206-11.289L440.966,315.475,361.5,236.013Zm45.523,68.149-11.17,11.252-34.353,34.351-.039-.038-34.276-34.277.041-.042L109.254,315.475l34.208-34.207,109.02,109.021L361.5,281.268l34.208,34.207Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M173.046,203.4l68.082,68.082,11.354,11.272.041.042,68.15-68.149,11.206-11.289L440.966,94.267,361.5,14.8,252.482,123.825,143.462,14.8,64,94.267,173.087,203.354ZM109.254,94.267l34.208-34.208L252.482,169.08,361.5,60.059l34.208,34.208-97.707,97.707-11.182,11.264-34.341,34.34-.039-.039-34.276-34.277.041-.041Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-chevron-double-left" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M276.055,143.463,196.592,64,87.571,173.021l-.041-.041L19.381,241.128l-4.3,4.328-7.085,7,68.217,68.216,11.342,11.26L196.592,440.967,276.055,361.5,167.034,252.484ZM196.592,395.712,98.885,298.005,87.53,286.732,53.348,252.551l.041-.041-.067-.068L87.53,218.235l.041.041L196.592,109.255,230.8,143.463,121.779,252.484,230.8,361.5Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M497.263,143.463,417.8,64,308.713,173.088l-.042-.041L240.59,241.128,229.4,252.406l-.119.119,68.148,68.148,11.288,11.2L417.8,440.967,497.263,361.5,388.242,252.484ZM452.008,361.5,417.8,395.712l-97.707-97.707-11.28-11.2-34.325-34.324,34.316-34.316.042.041L417.8,109.255l34.207,34.208L342.987,252.484Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-chevron-double-right" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M503.933,255.933l.041-.041L435.893,187.81l-6.221-6.175-5.122-5.085L315.516,67.516l-79.462,79.463L345.075,256,236.054,365.021l79.462,79.463L424.537,335.463l.041.041.067-.067h0l68.081-68.082L504,256Zm-188.417,143.3-34.207-34.208L390.33,256,281.309,146.979l34.207-34.208,97.707,97.707,11.355,11.273L458.827,256l-34.249,34.249-.041-.041-.067.067Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M282.792,256l-.067-.067.041-.041L214.684,187.81,203.4,176.6,94.308,67.516,14.845,146.979,123.866,256,14.845,365.021l79.463,79.463L203.4,335.4l.041.041,68.082-68.082ZM203.3,290.316l-.041-.041L94.308,399.229,60.1,365.021,169.121,256,60.1,146.979l34.208-34.208,97.707,97.707,11.279,11.2L237.619,256Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-chevron-double-up" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M259.516,173.771,368.537,282.792,448,203.329,338.979,94.308l.041-.041L270.872,26.118l-4.328-4.3-7-7.085-.067.067h0L191.326,82.953,179.988,94.374,71.033,203.329,150.5,282.792ZM214,105.622,225.334,94.2l34.115-34.115.041.041.067-.067,34.208,34.208-.041.041L402.745,203.329l-34.208,34.208L259.516,128.516,150.5,237.537l-34.207-34.208Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M338.953,315.408l-68.081-68.081-11.289-11.206-.108-.108-68.149,68.148-11.272,11.356L71.033,424.538,150.5,504,259.516,394.979,368.537,504,448,424.538,338.912,315.45Zm63.792,109.13-34.208,34.207L259.516,349.724,150.5,458.745l-34.207-34.207L214,326.831l11.256-11.34,34.265-34.265,34.316,34.316-.041.041Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-chevron-left" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M327.086,496.89l-142.6-142.6-11.258-11.15-85.6-85.6.054-.054,11.259-11.367,85.5-85.5.054.054,142.6-142.595L424,114.989,281.506,257.483,424,399.978ZM184.64,309.3l11.266,11.159,131.18,131.181,51.658-51.658L236.251,257.483,378.744,114.989,327.086,63.331,184.694,205.725l-.054-.054-51.813,51.812Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-chevron-right" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M183.505,496,86.237,398.73,229.412,255.556,86.237,112.38l97.268-97.27L326.732,158.338l11.316,11.209,85.9,85.9,0,0,.051.05-11.311,11.419-85.9,85.9-.055-.054Zm-52.013-97.27,52.013,52.014L326.629,307.62l.055.054L378.8,255.556l-52.127-52.128-11.308-11.2L183.505,60.366,131.492,112.38,274.667,255.556Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-chevron-top" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M398.986,424.715,256,281.73,113.014,424.715l-97.17-97.169L158.8,184.59l11.29-11.4L256,87.285l5.481,5.531,5.89,5.834,85.907,85.908-.054.054L496.156,327.546ZM61.1,327.546l51.915,51.915L256,236.474,398.986,379.461,450.9,327.546,307.863,184.508l.054-.053-51.812-51.813-.051.051-.1-.106-51.866,51.869-11.312,11.418Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-child-friendly" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M445.057,345.134,464,274.1V232c-8.136-93.993-87.933-168-184-168H248V232H132.158l-17.844-78.768A32.155,32.155,0,0,0,83.038,128H16v32H83.038l40.475,178.67A80,80,0,1,0,224,416q0-4.05-.4-8H328.4q-.395,3.948-.4,8a80,80,0,1,0,117.057-70.866ZM280,96c78.411,0,143.145,59.678,151.164,136H280ZM144,464a48,48,0,1,1,48-48A48.055,48.055,0,0,1,144,464Zm194.763-88H213.237a80.166,80.166,0,0,0-57.316-39.108L139.408,264H432v5.9l-17.7,66.368c-2.082-.163-4.179-.271-6.3-.271A80.026,80.026,0,0,0,338.763,376ZM408,464a48,48,0,1,1,48-48A48.055,48.055,0,0,1,408,464Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-child" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M425.39,200.035A184.3,184.3,0,0,0,290.812,91.289L317.568,48.48,290.432,31.52,255.127,88.008A184.046,184.046,0,0,0,86.61,200.035a71.978,71.978,0,0,0,0,143.93,184.071,184.071,0,0,0,338.78,0,71.978,71.978,0,0,0,0-143.93Zm27.152,99.975a39.77,39.77,0,0,1-27.76,11.961l-20.725.394-8.113,19.074a152.066,152.066,0,0,1-279.887,0l-8.114-19.074-20.725-.394a39.978,39.978,0,0,1,0-79.942l20.725-.394,8.114-19.074a152.067,152.067,0,0,1,279.887,0l8.113,19.074,20.725.394a39.974,39.974,0,0,1,27.76,67.981Z"
          className="ci-primary"
        />
        <rect
          width="40"
          height="40"
          x="168"
          y="232"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="40"
          height="40"
          x="304"
          y="232"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,384a80,80,0,0,0,80-80H176A80,80,0,0,0,256,384Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-circle" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256.6,496A239.364,239.364,0,0,0,425.856,87.379,239.364,239.364,0,0,0,87.344,425.892,237.8,237.8,0,0,0,256.6,496Zm0-446.729c114.341,0,207.365,93.023,207.365,207.364S370.941,464,256.6,464,49.236,370.977,49.236,256.635,142.259,49.271,256.6,49.271Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-clear-all" viewBox="0 0 512 512">
        <rect
          width="336"
          height="32"
          x="160"
          y="112"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="336"
          height="32"
          x="88"
          y="240"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="336"
          height="32"
          x="16"
          y="368"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-clipboard" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M432,56H376V88h48V464H88V88h48V56H80A24.028,24.028,0,0,0,56,80V472a24.028,24.028,0,0,0,24,24H432a24.028,24.028,0,0,0,24-24V80A24.028,24.028,0,0,0,432,56Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M192,140H320a24.028,24.028,0,0,0,24-24V16H168V116A24.028,24.028,0,0,0,192,140Zm8-92H312v60H200Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-clock" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="271.514 95.5 239.514 95.5 239.514 273.611 355.127 328.559 368.864 299.657 271.514 253.389 271.514 95.5"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16Zm0,448C141.125,464,48,370.875,48,256S141.125,48,256,48s208,93.125,208,208S370.875,464,256,464Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-clone" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M472,16H160a24.027,24.027,0,0,0-24,24V352a24.027,24.027,0,0,0,24,24H472a24.027,24.027,0,0,0,24-24V40A24.027,24.027,0,0,0,472,16Zm-8,328H168V48H464Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M344,464H48V168h56V136H40a24.027,24.027,0,0,0-24,24V472a24.027,24.027,0,0,0,24,24H352a24.027,24.027,0,0,0,24-24V408H344Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-closed-captioning" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M472,64H40A24.028,24.028,0,0,0,16,88V424a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V88A24.028,24.028,0,0,0,472,64Zm-8,352H48V96H464Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M184,344a87.108,87.108,0,0,0,54.484-18.891L218.659,299.99A55.41,55.41,0,0,1,184,312a56,56,0,0,1,0-112,55.41,55.41,0,0,1,34.659,12.01l19.825-25.119A87.108,87.108,0,0,0,184,168a88,88,0,0,0,0,176Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M347.429,344a87.108,87.108,0,0,0,54.484-18.891L382.088,299.99A55.414,55.414,0,0,1,347.429,312a56,56,0,0,1,0-112,55.414,55.414,0,0,1,34.659,12.01l19.825-25.119A87.108,87.108,0,0,0,347.429,168a88,88,0,0,0,0,176Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-cloud-download" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="272 434.744 272 209.176 240 209.176 240 434.744 188.118 382.862 165.49 405.489 256 496 346.51 405.489 323.882 382.862 272 434.744"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M400,161.176c0-79.4-64.6-144-144-144s-144,64.6-144,144a96,96,0,0,0,0,192h80v-32H112a64,64,0,0,1,0-128h32v-32a112,112,0,0,1,224,0v32h32a64,64,0,0,1,0,128H320v32h80a96,96,0,0,0,0-192Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-cloud-upload" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="346.231 284.746 256.039 194.554 165.847 284.746 188.474 307.373 240.039 255.808 240.039 496 272.039 496 272.039 255.808 323.604 307.373 346.231 284.746"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M400,161.453V160c0-79.4-64.6-144-144-144S112,80.6,112,160v2.491A122.285,122.285,0,0,0,49.206,195.2,109.4,109.4,0,0,0,16,273.619c0,31.119,12.788,60.762,36.01,83.469C74.7,379.275,105.338,392,136.07,392H200V360H136.07C89.154,360,48,319.635,48,273.619c0-42.268,35.64-77.916,81.137-81.155L144,191.405V160a112,112,0,0,1,224,0v32.04l15.8.2c46.472.588,80.2,34.813,80.2,81.379C464,322.057,428.346,360,382.83,360H312v32h70.83a109.749,109.749,0,0,0,81.14-35.454C484.625,334.339,496,304.889,496,273.619,496,215.182,455.716,169.392,400,161.453Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-cloud" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M382.76,432H136c-30.732,0-61.371-12.725-84.061-34.912-23.221-22.707-36.009-52.35-36.009-83.469A109.4,109.4,0,0,1,49.136,235.2a122.281,122.281,0,0,1,62.794-32.707V200c0-79.4,64.6-144,144-144s144,64.6,144,144v1.453c55.716,7.939,96,53.729,96,112.166,0,31.27-11.375,60.72-32.031,82.927A109.747,109.747,0,0,1,382.76,432ZM255.93,88a112.127,112.127,0,0,0-112,112v31.405l-14.864,1.059c-45.5,3.239-81.136,38.887-81.136,81.155C47.93,359.635,89.084,400,136,400H382.76c45.515,0,81.17-37.943,81.17-86.381,0-46.566-33.731-80.791-80.2-81.379l-15.8-.2V200A112.127,112.127,0,0,0,255.93,88Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-cloudy" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M399.667,264.875v-3.813c0-79.4-64.6-144-144-144-2.2,0-4.391.057-6.569.156A116.689,116.689,0,1,0,112.315,247.444c-.422,4.484-.648,9.025-.648,13.618v3.813A116.633,116.633,0,0,0,132.287,496.3H379.046a116.633,116.633,0,0,0,20.621-231.427ZM48.75,132.688a84.677,84.677,0,0,1,168.705-10.47,144.606,144.606,0,0,0-98.59,93.876A84.807,84.807,0,0,1,48.75,132.688ZM379.046,464.3H132.287a84.619,84.619,0,0,1-3.9-169.148l15.277-.69v-33.4a112,112,0,1,1,224,0v33.4l15.277.69a84.619,84.619,0,0,1-3.9,169.148Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-code" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="388.632 393.82 495.823 255.94 388.684 118.178 363.424 137.822 455.288 255.944 363.368 374.18 388.632 393.82"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="148.579 374.181 56.712 255.999 148.629 137.823 123.371 118.177 16.177 255.993 123.314 393.819 148.579 374.181"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="330.529 16 297.559 16 178.441 496 211.412 496 330.529 16"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-coffee" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M191.5,376h97A111.627,111.627,0,0,0,400,264.5V248h24a72,72,0,0,0,0-144H80V264.5A111.627,111.627,0,0,0,191.5,376ZM400,136h24a40,40,0,0,1,0,80H400Zm-288,0H368V264.5A79.589,79.589,0,0,1,288.5,344h-97A79.589,79.589,0,0,1,112,264.5Z"
          className="ci-primary"
        />
        <rect
          width="480"
          height="32"
          x="16"
          y="416"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-cog" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M245.151,168a88,88,0,1,0,88,88A88.1,88.1,0,0,0,245.151,168Zm0,144a56,56,0,1,1,56-56A56.063,56.063,0,0,1,245.151,312Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M464.7,322.319l-31.77-26.153a193.081,193.081,0,0,0,0-80.332l31.77-26.153a19.941,19.941,0,0,0,4.606-25.439l-32.612-56.483a19.936,19.936,0,0,0-24.337-8.73l-38.561,14.447a192.038,192.038,0,0,0-69.54-40.192L297.49,32.713A19.936,19.936,0,0,0,277.762,16H212.54a19.937,19.937,0,0,0-19.728,16.712L186.05,73.284a192.03,192.03,0,0,0-69.54,40.192L77.945,99.027a19.937,19.937,0,0,0-24.334,8.731L21,164.245a19.94,19.94,0,0,0,4.61,25.438l31.767,26.151a193.081,193.081,0,0,0,0,80.332l-31.77,26.153A19.942,19.942,0,0,0,21,347.758l32.612,56.483a19.937,19.937,0,0,0,24.337,8.73l38.562-14.447a192.03,192.03,0,0,0,69.54,40.192l6.762,40.571A19.937,19.937,0,0,0,212.54,496h65.222a19.936,19.936,0,0,0,19.728-16.712l6.763-40.572a192.038,192.038,0,0,0,69.54-40.192l38.564,14.449a19.938,19.938,0,0,0,24.334-8.731L469.3,347.755A19.939,19.939,0,0,0,464.7,322.319Zm-50.636,57.12-48.109-18.024-7.285,7.334a159.955,159.955,0,0,1-72.625,41.973l-10,2.636L267.6,464h-44.89l-8.442-50.642-10-2.636a159.955,159.955,0,0,1-72.625-41.973l-7.285-7.334L76.241,379.439,53.8,340.562l39.629-32.624-2.7-9.973a160.9,160.9,0,0,1,0-83.93l2.7-9.972L53.8,171.439l22.446-38.878,48.109,18.024,7.285-7.334a159.955,159.955,0,0,1,72.625-41.973l10-2.636L222.706,48H267.6l8.442,50.642,10,2.636a159.955,159.955,0,0,1,72.625,41.973l7.285,7.334,48.109-18.024,22.447,38.877-39.629,32.625,2.7,9.972a160.9,160.9,0,0,1,0,83.93l-2.7,9.973,39.629,32.623Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-color-border" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M143.4,331.909a17.505,17.505,0,0,0,3.285-.311l89.867-21.281,190.2-190.2a62.922,62.922,0,1,0-88.986-88.985l-190.2,190.2-21.134,89.185-.145.674A17.435,17.435,0,0,0,143.4,331.909Zm33.21-94.369L360.4,53.755a30.922,30.922,0,1,1,43.731,43.731L220.342,281.272l-57.314,13.582Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M472,376H40a24.028,24.028,0,0,0-24,24v72a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V400A24.028,24.028,0,0,0,472,376Zm-8,88H48V408H464Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-color-fill" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M40,496H472a24.028,24.028,0,0,0,24-24V400a24.028,24.028,0,0,0-24-24H40a24.028,24.028,0,0,0-24,24v72A24.028,24.028,0,0,0,40,496Zm8-88H464v56H48Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M45.01,239.489a50.2,50.2,0,0,0,36.2,61.07l158.5,40.524h0a50.174,50.174,0,0,0,61.07-36.2L353.742,97.745,97.969,32.352,85.959,79.326l-58-14.827-7.926,31,58,14.828ZM121.045,71.281l193.767,49.54L294.568,200H88.135ZM286.387,232,269.78,296.956a18.221,18.221,0,0,1-22.141,13.125h0l-158.5-40.525a18.22,18.22,0,0,1-13.124-22.14L80,231.82V232Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M420,352c37.5,0,68-32.3,68-72,0-16.181-9.341-38.514-28.559-68.277-13.285-20.576-26.39-37.021-26.941-37.711L420,158.37l-12.5,15.642c-.551.69-13.656,17.135-26.941,37.711C361.341,241.486,352,263.819,352,280,352,319.7,382.505,352,420,352Zm0-141.441C437.658,235.2,456,265.985,456,280c0,22.056-16.149,40-36,40s-36-17.944-36-40C384,265.985,402.343,235.2,420,210.559Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-color-palette" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M425.514,82.055C380.778,39.458,320.673,16,256.271,16,196.248,16,136.415,36.073,92.115,71.071,43.032,109.85,16,164.161,16,224c0,60.1,15.531,98.87,48.876,122.019,28,19.438,68.412,27.731,135.124,27.731h29.75A26.28,26.28,0,0,1,256,400v47.984a32,32,0,0,0,32,32h.032l90.755-.088a32.094,32.094,0,0,0,19.686-6.8c9.725-7.622,34.727-29.4,56.8-66.9C482.3,360.262,496,307.037,496,248,496,184.268,470.968,125.334,425.514,82.055Zm2.173,307.915c-19.3,32.792-40.663,51.447-48.932,57.926L288,447.984V400a58.316,58.316,0,0,0-58.25-58.25H200c-59.69,0-94.644-6.585-116.876-22.019C58.833,302.869,48,273.344,48,224,48,113.833,153.9,48,256.271,48,372.755,48,464,135.851,464,248,464,301.253,451.782,349.019,427.687,389.97Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M128,144a56,56,0,1,0,56,56A56.064,56.064,0,0,0,128,144Zm0,80a24,24,0,1,1,24-24A24.027,24.027,0,0,1,128,224Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M240,72a56,56,0,1,0,56,56A56.064,56.064,0,0,0,240,72Zm0,80a24,24,0,1,1,24-24A24.027,24.027,0,0,1,240,152Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M360,128a56,56,0,1,0,56,56A56.064,56.064,0,0,0,360,128Zm0,80a24,24,0,1,1,24-24A24.027,24.027,0,0,1,360,208Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M376,264a56,56,0,1,0,56,56A56.064,56.064,0,0,0,376,264Zm0,80a24,24,0,1,1,24-24A24.027,24.027,0,0,1,376,344Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-columns" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M472,48H40A24.028,24.028,0,0,0,16,72V448a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V72A24.028,24.028,0,0,0,472,48Zm-8,32v64H48V80ZM48,176H240V440H48ZM272,440V176H464V440Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-command" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M416,176a80,80,0,1,0-80-80v48H176V96a80,80,0,1,0-80,80h48V336H96a80,80,0,1,0,80,80V368H336v48a80,80,0,1,0,80-80H368V176ZM368,96a48,48,0,1,1,48,48H368ZM144,416a48,48,0,1,1-48-48h48Zm0-272H96a48,48,0,1,1,48-48ZM336,336H176V176H336Zm80,32a48,48,0,1,1-48,48V368Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-comment-bubble" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M496,496H480a273.39,273.39,0,0,1-179.025-66.782l-16.827-14.584C274.814,415.542,265.376,416,256,416c-63.527,0-123.385-20.431-168.548-57.529C41.375,320.623,16,270.025,16,216S41.375,111.377,87.452,73.529C132.615,36.431,192.473,16,256,16S379.385,36.431,424.548,73.529C470.625,111.377,496,161.975,496,216a171.161,171.161,0,0,1-21.077,82.151,201.505,201.505,0,0,1-47.065,57.537,285.22,285.22,0,0,0,63.455,97L496,457.373ZM294.456,381.222l27.477,23.814a241.379,241.379,0,0,0,135,57.86,317.5,317.5,0,0,1-62.617-105.583v0l-4.395-12.463,9.209-7.068C440.963,305.678,464,262.429,464,216c0-92.636-93.309-168-208-168S48,123.364,48,216s93.309,168,208,168a259.114,259.114,0,0,0,31.4-1.913Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-comment-square" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M496,496H448.771L379.249,368H40a24.028,24.028,0,0,1-24-24V40A24.028,24.028,0,0,1,40,16H472a24.028,24.028,0,0,1,24,24ZM48,336H398.284L464,456.993V48H48Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-compass" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M209.686,304.963l119.051,59.424a24,24,0,0,0,32.182-32.21l-59.5-118.948L182.333,153.584a24,24,0,0,0-32.216,32.189Zm67.88-67.892,44.006,87.975L233.535,281.1l-44.056-88.149Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,496c132.548,0,240-107.452,240-240S388.548,16,256,16,16,123.452,16,256,123.452,496,256,496ZM48.353,244C54.269,140.018,136.553,56.476,240,48.606V115h32V48.606C375.447,56.476,457.731,140.018,463.647,244H399.971v32h63.068C453.474,376.238,372.78,455.727,272,463.394V403H240v60.394C139.22,455.727,58.526,376.238,48.961,276h63.01V244Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-compress" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="144 144 16 144 16 176 176 176 176 16 144 16 144 144"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="368 144 368 16 336 16 336 176 496 176 496 144 368 144"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="336 496 368 496 368 368 496 368 496 336 336 336 336 496"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="16 368 144 368 144 496 176 496 176 336 16 336 16 368"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-contact" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M472,48H40A24.028,24.028,0,0,0,16,72V440a24.028,24.028,0,0,0,24,24h88V405.178A20.01,20.01,0,0,1,138.284,387.7l91.979-51.123L200,260.919V200a56,56,0,0,1,112,0v60.919l-30.263,75.655L373.716,387.7h0A20.011,20.011,0,0,1,384,405.178V464h88a24.028,24.028,0,0,0,24-24V72A24.028,24.028,0,0,0,472,48Zm-8,384H416V405.178a52.027,52.027,0,0,0-26.738-45.451h0L321.915,322.3,344,267.081V200a88,88,0,0,0-176,0v67.081L190.085,322.3l-67.347,37.432A52.027,52.027,0,0,0,96,405.178V432H48V80H464Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-contrast" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM234,462.849a208.346,208.346,0,0,1-169.667-125.9c-.364-.859-.706-1.724-1.057-2.587L234,429.939Zm0-69.582L50.889,290.76A209.848,209.848,0,0,1,48,256q0-9.912.922-19.67L234,339.939Zm0-90L54.819,202.96a206.385,206.385,0,0,1,9.514-27.913Q67.1,168.5,70.3,162.191L234,253.934Zm0-86.015L86.914,134.819a209.42,209.42,0,0,1,22.008-25.9q3.72-3.72,7.6-7.228L234,166.027Zm0-87.708L144.352,80.451A206.951,206.951,0,0,1,234,49.151ZM464,256A207.775,207.775,0,0,1,266,463.761V48.239A207.791,207.791,0,0,1,464,256Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-control" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M336,256a80,80,0,1,0-80,80A80.091,80.091,0,0,0,336,256Zm-128,0a48,48,0,1,1,48,48A48.055,48.055,0,0,1,208,256Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M160,397.988,245.307,496h21.386L352,397.988V368H160ZM307.825,400,256,459.544,204.175,400Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M245.307,16,160,114.012V144H352V114.012L266.693,16Zm-41.132,96L256,52.456,307.825,112Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M16,245.307v21.386L114.013,352H144V160H114.013Zm96,62.519L52.455,256,112,204.174Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M397.987,160H368V352h29.987L496,266.693V245.307ZM400,307.826V204.174L459.545,256Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-copy" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="408 432 376 432 376 464 112 464 112 136 144 136 144 104 80 104 80 496 408 496 408 432"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M176,16V400H496V153.373L358.627,16ZM464,368H208V48H312V200H464Zm0-200H344V48h1.372L464,166.627Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-couch" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M448,242.025V152a48.055,48.055,0,0,0-48-48H112a48.055,48.055,0,0,0-48,48v90.025A64.115,64.115,0,0,0,16,304V416a32.036,32.036,0,0,0,32,32H64v48H96V448H416v48h32V448h16a32.036,32.036,0,0,0,32-32V304A64.115,64.115,0,0,0,448,242.025ZM112,416H48V304a32,32,0,0,1,64,0Zm256,0H144V320H368Zm2.025-128H141.975A64.243,64.243,0,0,0,96,242.025V152a16.019,16.019,0,0,1,16-16H400a16.019,16.019,0,0,1,16,16v90.025A64.243,64.243,0,0,0,370.025,288ZM464,416H400V304a32,32,0,0,1,64,0l.02,112Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-credit-card" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M472,72H40A24.028,24.028,0,0,0,16,96V416a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V96A24.028,24.028,0,0,0,472,72Zm-8,32v64H48V104ZM48,408V232H464V408Z"
          className="ci-primary"
        />
        <rect
          width="64"
          height="32"
          x="88"
          y="312"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="64"
          height="32"
          x="184"
          y="312"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-crop-rotate" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M49.386,256c0-114.184,92.8-207.1,206.935-207.294V90.465L368,15.965H256.321L256,16c-63.783.094-123.414,25.679-168.525,70.79A237.732,237.732,0,0,0,17.386,256Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M255.987,463.367V432L144.308,496H255.987c132.4-.36,240-108.214,240-239.965h-32C463.982,370.141,370.738,463.007,255.987,463.367Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M337.372,152H184V120H152v32H120v32h32V360H320v32h32V360h32V328H352V222.628l-32,32V328H201.373L384,145.372V128H361.372ZM184,305.372V184H305.372Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-crop" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M433.372,56H88V16H56V56H16V88H56V456H424v40h32V456h40V424H456V78.628l40-40V16H473.372Zm-32,32L88,401.372V88ZM424,424H110.628L424,110.628Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-cursor-move" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="130.412 323.98 78.529 272.098 240 272.098 240 433.568 188.118 381.687 165.49 404.313 256 494.823 346.51 404.313 323.882 381.687 272 433.568 272 272.098 432.667 272.098 380.784 323.98 403.412 346.607 493.921 256.098 403.412 165.588 380.784 188.215 432.667 240.098 272 240.098 272 79.432 323.882 131.313 346.51 108.687 256 18.177 165.49 108.687 188.118 131.313 240 79.432 240 240.098 78.529 240.098 130.412 188.215 107.784 165.588 17.274 256.098 107.785 346.608 130.412 323.98"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-cursor" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M446.754,47.9a20.075,20.075,0,0,0-21.307-2.745L32,229.835v37l165.349,66.139L303.317,496h37L453.281,68.369A20.072,20.072,0,0,0,446.754,47.9ZM317.124,458.524l-98.473-151.5-148.9-59.561L415.779,85.044Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-cut" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M104,320a88.067,88.067,0,1,0,75.607,43.02L260,282.627,425.373,448H448V425.373L282.627,260,448,94.627V72H425.373L260,237.373,176.477,153.85a88.088,88.088,0,1,0-22.627,22.627L237.373,260l-78.919,78.919A87.57,87.57,0,0,0,104,320Zm0-160a56,56,0,1,1,56-56A56.063,56.063,0,0,1,104,160Zm0,304a56,56,0,1,1,56-56A56.063,56.063,0,0,1,104,464Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-data-transfer-down" viewBox="0 0 512 512">
        <rect
          width="480"
          height="32"
          x="16"
          y="464"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="395.313 299.313 372.687 276.687 280 369.373 280 16 248 16 248 369.373 155.313 276.687 132.687 299.313 264 430.627 395.313 299.313"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-data-transfer-up" viewBox="0 0 512 512">
        <rect
          width="480"
          height="32"
          x="16"
          y="16"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="116.687 212.687 139.313 235.313 232 142.627 232 496 264 496 264 142.627 356.687 235.313 379.313 212.687 248 81.373 116.687 212.687"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-deaf" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256.16,72c65.3.46,118.745,53.964,119.131,119.269a120.126,120.126,0,0,1-33.161,83.545l22.631,22.631a152.141,152.141,0,0,0,42.53-106.365C406.8,108.36,339.105,40.586,256.385,40A150.765,150.765,0,0,0,149.849,82.536l22.629,22.628A119.24,119.24,0,0,1,256.16,72Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M359.293,337.235h0l-32-32h0L243.3,221.241l-42.29-42.29h0l-24.843-24.843h0L38.058,16H15.293V38.489l98.294,98.294A151.914,151.914,0,0,0,103.293,192v32h32V192A120.77,120.77,0,0,1,139,162.2l28.324,28.324c-.021.791-.034,1.585-.034,2.381v85.729l5.089,5.082A118.419,118.419,0,0,1,207.293,368h32a150.125,150.125,0,0,0-40-102.453V222.489l128,128v26.178A63.4,63.4,0,0,1,263.96,440H239.293v32H263.96a95.452,95.452,0,0,0,95.161-89.684L472.805,496h22.488V473.234Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M254.628,104A87.158,87.158,0,0,0,195.3,127.991l22.62,22.62A55.232,55.232,0,0,1,254.865,136h.428a56,56,0,0,1,56,56h32a88,88,0,0,0-88.665-88Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-delete" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="227.313 363.313 312 278.627 396.687 363.313 419.313 340.687 334.627 256 419.313 171.313 396.687 148.687 312 233.373 227.313 148.687 204.687 171.313 289.373 256 204.687 340.687 227.313 363.313"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M472,64H194.644a24.091,24.091,0,0,0-17.42,7.492L16,241.623v28.754L177.224,440.508A24.091,24.091,0,0,0,194.644,448H472a24.028,24.028,0,0,0,24-24V88A24.028,24.028,0,0,0,472,64Zm-8,352H198.084L48,257.623v-3.246L198.084,96H464Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-description" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M334.627,16H48V496H472V153.373ZM440,166.627V168H320V48h1.373ZM80,464V48H288V200H440V464Z"
          className="ci-primary"
        />
        <rect
          width="224"
          height="32"
          x="136"
          y="296"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="224"
          height="32"
          x="136"
          y="376"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-devices" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M472,232H424V120a24.028,24.028,0,0,0-24-24H40a24.028,24.028,0,0,0-24,24V366a24.028,24.028,0,0,0,24,24H212v50H152v32H304V440H244V390h92v58a24.027,24.027,0,0,0,24,24H472a24.027,24.027,0,0,0,24-24V256A24.027,24.027,0,0,0,472,232ZM336,256V358H48V128H392V232H360A24.027,24.027,0,0,0,336,256ZM464,440H368V264h96Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-dialpad" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M121,16a48,48,0,1,0,48,48A48.054,48.054,0,0,0,121,16Zm0,64a16,16,0,1,1,16-16A16.019,16.019,0,0,1,121,80Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M249,16a48,48,0,1,0,48,48A48.054,48.054,0,0,0,249,16Zm0,64a16,16,0,1,1,16-16A16.019,16.019,0,0,1,249,80Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M377,112a48,48,0,1,0-48-48A48.054,48.054,0,0,0,377,112Zm0-64a16,16,0,1,1-16,16A16.019,16.019,0,0,1,377,48Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M121,144a48,48,0,1,0,48,48A48.054,48.054,0,0,0,121,144Zm0,64a16,16,0,1,1,16-16A16.019,16.019,0,0,1,121,208Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M249,144a48,48,0,1,0,48,48A48.054,48.054,0,0,0,249,144Zm0,64a16,16,0,1,1,16-16A16.019,16.019,0,0,1,249,208Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M377,144a48,48,0,1,0,48,48A48.054,48.054,0,0,0,377,144Zm0,64a16,16,0,1,1,16-16A16.019,16.019,0,0,1,377,208Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M121,272a48,48,0,1,0,48,48A48.054,48.054,0,0,0,121,272Zm0,64a16,16,0,1,1,16-16A16.019,16.019,0,0,1,121,336Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M249,272a48,48,0,1,0,48,48A48.054,48.054,0,0,0,249,272Zm0,64a16,16,0,1,1,16-16A16.019,16.019,0,0,1,249,336Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M377,272a48,48,0,1,0,48,48A48.054,48.054,0,0,0,377,272Zm0,64a16,16,0,1,1,16-16A16.019,16.019,0,0,1,377,336Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M249,400a48,48,0,1,0,48,48A48.054,48.054,0,0,0,249,400Zm0,64a16,16,0,1,1,16-16A16.019,16.019,0,0,1,249,464Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-diamond" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M408.563,48H103.438L16,179.156v24.786L199.421,480H312.579L496,203.942V179.156ZM391.438,80l63.407,95.111H347.739L317.808,80Zm-163.7,0h56.524l29.93,95.111H197.808ZM120.563,80h73.629l-29.931,95.111H57.155Zm96.016,368L56.525,207.111H163.318L219.813,448Zm36.1,0L196.187,207.111H315.813L259.318,448Zm42.739,0h-3.234l56.5-240.889H455.475Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-dinner" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M464,344.063c0-109.308-84.755-199.193-192-207.39V80H240v56.673c-107.245,8.2-192,98.082-192,207.39V377.17H464Zm-32,1.107H80v-1.107c0-97.046,78.953-176,176-176s176,78.953,176,176Z"
          className="ci-primary"
        />
        <rect
          width="480"
          height="32"
          x="16"
          y="416"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-disabled" viewBox="0 0 512 512">
        <circle
          cx="221.912"
          cy="66.088"
          r="34.088"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M460.12,360.478l-47.943,11.985L393,282.971A24.126,24.126,0,0,0,369.533,264H280.828l-6.462-56H384V176H270.674l-4.134-35.826a24,24,0,0,0-26.593-21.091l-39.736,4.585L220.1,296h142.97l24.758,115.537,80.057-20.015Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M224,448a120,120,0,0,1-45.248-231.135l-3.779-32.75C115.143,204.558,72,261.334,72,328c0,83.813,68.187,152,152,152a152.06,152.06,0,0,0,130.044-73.378L344,360C328,408,282.6,448,224,448Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-dog" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M393.3,161.33,334.532,76.438a48.09,48.09,0,0,0-38.775-20.673l-111.527-1.6-.23,0c-57.579,0-101.757,9.631-130.21,56.634C27.3,154.551,16,229.08,16,360v16H52.557L29.024,496h32.61L85.167,376H96a99.521,99.521,0,0,0,70.088-27.992c16.979-16.246,29.226-38.472,35.419-64.274l.056-.232L229.006,152h-32.69L170.337,276.488C162.425,309.168,138.766,344,96,344H48.06c.869-113.266,11.182-180.419,33.105-216.634,18.4-30.4,45.295-41.191,102.724-41.206l111.408,1.6a16.026,16.026,0,0,1,12.925,6.891L374.7,190.67,464,205.554v16.959l-14.892,79.421c-4.395,23.441-11.908,35.249-42.718,38.95L280.084,362.493,279.249,496h32l.667-106.493,98.7-16.9c22.36-2.749,38.857-9.955,50.426-22.023,9.89-10.318,15.909-23.5,19.519-42.752L496,225.487V178.446Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-dollar" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M296,240H216a46.222,46.222,0,1,1,0-92.444H344v-32H276V56H244v59.556H216A78.222,78.222,0,0,0,216,272h80a46.274,46.274,0,0,1,46.222,46.222v3.556A46.274,46.274,0,0,1,296,368H160.593v32H244v56h32V400h20a78.31,78.31,0,0,0,78.222-78.222v-3.556A78.31,78.31,0,0,0,296,240Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-door" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M400,464V64H112V464H16v32H496V464Zm-32,0H144V96H368Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="72"
          x="312"
          y="252"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-double-quote-sans-left" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-double-quote-sans-right" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-drink-alcohol" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M248,440H176v32H352V440H280V318.968L456,126.206V80H72v46.206L248,318.968ZM104,113.794V112H424v1.794L374.508,168H153.492ZM182.709,200H345.291l-80.349,88h-1.884Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-drink" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M273.637,128l3.809,32h96.43l-8,64H252.573l-7.442-64h.089l-3.809-32h0l-.045-.389-9.041-77.745L230.247,32H104V64h97.753l7.442,64H117.876l40.5,323.969A32.051,32.051,0,0,0,190.125,480h147.75a32.051,32.051,0,0,0,31.753-28.031L410.124,128ZM154.124,160h58.792l7.442,64H162.124ZM337.889,448H190.124l-24-192h57.955l13.953,120h32.215L256.293,256H361.88Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-drop" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M394.633,220.663,269.475,25.174a16,16,0,0,0-26.95,0L117.364,220.665A170.531,170.531,0,0,0,84.1,322.3c0,94.785,77.113,171.9,171.9,171.9s171.9-77.113,171.9-171.9A170.519,170.519,0,0,0,394.633,220.663ZM256,462.2c-77.14,0-139.9-62.758-139.9-139.9a138.758,138.758,0,0,1,27.321-83.058q.319-.432.608-.884L256,63.475,367.967,238.359q.288.453.608.884A138.754,138.754,0,0,1,395.9,322.3C395.9,399.441,333.14,462.2,256,462.2Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-eco" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M389.053,126.3A302.909,302.909,0,0,0,280.012,18.15L272,13.516l-8.012,4.634A301.084,301.084,0,0,0,113.4,279.042c0,3.445.06,6.944.177,10.4,1.592,46.856,19.511,86.283,51.82,114.018,24.724,21.225,56.438,34.182,90.607,37.273V496h32V240H256V408.528c-54.064-6.263-107.873-44.455-110.444-120.174-.106-3.095-.16-6.228-.16-9.312A270.286,270.286,0,0,1,272,50.673,270.286,270.286,0,0,1,398.6,279.042c0,3.084-.054,6.217-.16,9.313-2.056,60.573-36.907,97.127-78.444,112.536v33.867a156.188,156.188,0,0,0,58.607-31.3c32.309-27.735,50.228-67.162,51.82-114.017.117-3.456.177-6.955.177-10.4A300.948,300.948,0,0,0,389.053,126.3Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-education" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="368 350.643 256 413.643 144 350.643 144 284.081 112 266.303 112 369.357 256 450.357 400 369.357 400 266.303 368 284.081 368 350.643"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,45.977,32,162.125v27.734L256,314.3,448,207.637V296h32V162.125ZM416,188.808l-32,17.777L256,277.7,128,206.585,96,188.808,73.821,176.486,256,82.023l182.179,94.463Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-elevator" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,30.4,96,168.681V232H416V168.681ZM384,200H128V183.319L256,72.7,384,183.319Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M96,343.319,256,481.6,416,343.319V280H96ZM128,312H384v16.681L256,439.3,128,328.681Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-envelope-closed" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M16,112V496H496V112ZM236.8,341.6a32.167,32.167,0,0,0,38.4,0L298.667,324,464,448v16H48V448L213.333,324ZM256,316,48,160V144H464v16ZM48,200,186.667,304,48,408ZM464,408,325.333,304,464,200Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-envelope-letter" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M400,163.2V68a20.023,20.023,0,0,0-20-20H132a20.023,20.023,0,0,0-20,20v95.2L16,231.766V496H496V231.766Zm53.679,77.667L400,275.96V202.52ZM144,80H368V296.883l-57.166,37.378-46.578-24.152-50.764,24.507L144,292.425ZM263.744,345.89,464,449.727V464H48V450.043ZM48,271.575,179.144,351.2,48,414.509Zm295.446,79.6L464,272.347V413.681ZM112,202.52V273L58.666,240.615Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-envelope-open" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-equalizer" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M96,146.025V16H64V146.025a64.009,64.009,0,0,0,0,123.95V496H96V269.975a64.009,64.009,0,0,0,0-123.95ZM80,240a32,32,0,1,1,32-32A32.036,32.036,0,0,1,80,240Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M272,290.025V16H240V290.025a64.009,64.009,0,0,0,0,123.95V496h32V413.975a64.009,64.009,0,0,0,0-123.95ZM256,384a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,384Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M448,82.025V16H416V82.025a64.009,64.009,0,0,0,0,123.95V496h32V205.975a64.009,64.009,0,0,0,0-123.95ZM432,176a32,32,0,1,1,32-32A32.036,32.036,0,0,1,432,176Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-ethernet" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="385.128 118.178 359.868 137.822 451.732 255.944 359.813 374.18 385.076 393.82 492.268 255.94 385.128 118.178"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="119.814 118.177 12.621 255.993 119.759 393.819 145.022 374.181 53.156 255.999 145.074 137.823 119.814 118.177"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="160"
          y="240"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="240"
          y="240"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="320"
          y="240"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-euro" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M316,120h60V88H316c-73.747,0-136.794,46.657-161.195,112H104v32h42.292a172.176,172.176,0,0,0,0,56H104v32h50.805c24.4,65.343,87.448,112,161.2,112h60V400H316a140.176,140.176,0,0,1-126.474-80H344V288H178.815a140.661,140.661,0,0,1,0-56H344V200H189.526A140.176,140.176,0,0,1,316,120Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-excerpt" viewBox="0 0 512 512">
        <rect
          width="480"
          height="32"
          x="16"
          y="344"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="480"
          height="32"
          x="16"
          y="152.333"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="328"
          height="32"
          x="16"
          y="248"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="384"
          height="32"
          x="16"
          y="56"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="16"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="240"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="128"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-exit-to-app" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M472,16H40A24.028,24.028,0,0,0,16,40V200H48V48H464V464H48V304H16V472a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V40A24.028,24.028,0,0,0,472,16Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="209.377 363.306 232.004 385.933 366.627 251.31 232.004 116.687 209.377 139.313 305.374 235.311 16 235.311 16 267.311 305.372 267.311 209.377 363.306"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-expand-down" viewBox="0 0 512 512">
        <rect
          width="480"
          height="32"
          x="16"
          y="16"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M16,496H496V368H16Zm32-96H464v64H48Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M416,96H96v37.86L255.923,303.224,416,135.921ZM256.077,256.776,134.478,128H379.291Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-expand-left" viewBox="0 0 512 512">
        <rect
          width="32"
          height="480"
          x="464"
          y="16"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M144,16H16V496H144ZM112,464H48V48h64Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M416,96H378.14L208.776,255.923,376.079,416H416ZM384,379.291,255.224,256.077,384,134.478Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-expand-right" viewBox="0 0 512 512">
        <rect
          width="32"
          height="480"
          x="40"
          y="19"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M392,499H520V19H392ZM424,51h64V467H424Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M120,419h37.86L327.224,259.077,159.921,99H120Zm32-283.291L280.776,258.924,152,380.522Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-expand-up" viewBox="0 0 512 512">
        <rect
          width="480"
          height="32"
          x="16"
          y="467"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M16,147H496V19H16ZM48,51H464v64H48Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256.077,211.777,96,379.079V419H416V381.14ZM132.709,387,255.923,258.224,377.522,387Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-exposure" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M456,40H56A16,16,0,0,0,40,56V456a16,16,0,0,0,16,16H456a16,16,0,0,0,16-16V56A16,16,0,0,0,456,40ZM72,72H417.373L72,417.373ZM440,440H94.627L440,94.627Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="336 368 336 408 368 408 368 368 408 368 408 336 368 336 368 296 336 296 336 336 296 336 296 368 336 368"
          className="ci-primary"
        />
        <rect
          width="112"
          height="32"
          x="112"
          y="136"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-external-link" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="400 464 48 464 48 104 240 104 240 72 16 72 16 496 432 496 432 272 400 272 400 464"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="304 16 304 48 441.373 48 188.687 300.687 211.313 323.313 464 70.627 464 208 496 208 496 16 304 16"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-eyedropper" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M19.409,431.289v41.468a24.124,24.124,0,0,0,24.1,24.1H76.877A149.445,149.445,0,0,0,183.25,452.792L383.966,252.075l55.846,56.069,22.671-22.582-55.889-56.114,1.287-1.288-.021-.02,63.287-63.287a84.853,84.853,0,0,0,0-120l-4-4a84.852,84.852,0,0,0-120,0l-64.326,64.326L230.947,53.1,208.275,75.68,260.387,128,63.471,324.916A149.449,149.449,0,0,0,19.409,431.289ZM369.774,63.48a52.854,52.854,0,0,1,74.747,0l4,4a52.913,52.913,0,0,1,0,74.745L387.147,203.6,308.4,124.853Zm-85.72,86.107,78.573,78.573-69.176,69.176v-.483H136.788ZM104.788,328.853H261.935L160.623,430.165a117.662,117.662,0,0,1-83.746,34.688H51.409V431.289A117.664,117.664,0,0,1,86.1,347.543Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-face-dead" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
          className="ci-primary"
        />
        <rect
          width="176"
          height="32"
          x="168"
          y="320"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-face" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
          className="ci-primary"
        />
        <rect
          width="40"
          height="40"
          x="128"
          y="192"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="40"
          height="40"
          x="336"
          y="192"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M232,306.948a5.049,5.049,0,0,1,.194-1.387L264,194.241V168H232v21.759L201.426,296.768A37.052,37.052,0,0,0,237.052,344H296V312H237.052A5.057,5.057,0,0,1,232,306.948Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-factory-slash" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="459.26 96 328 225.697 328 96 293.45 96 229.01 161.128 251.638 183.756 296 138.92 296 228.118 333.314 265.433 464 136.303 464 396.118 496 428.118 496 416 496 96 459.26 96"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="168 16 88 16 83.882 16 168 100.118 168 16"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="136"
          y="304"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="136"
          y="376"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="216"
          y="304"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="216"
          y="376"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="296"
          y="376"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M38.627,16H16V496H496V473.373ZM48,464V70.627l88,88V248h32V190.627L441.373,464Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-factory" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M459.26,96,328,225.7V96H293.475L168,223.267V16H16V496H496V96ZM464,464H48V48h88V264h36.778L296,139.018V264h38.764L464,136.3Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="136 328 136 336 168 336 168 328 168 304 136 304 136 328"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="136"
          y="376"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="216 328 216 336 248 336 248 328 248 304 216 304 216 328"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="216"
          y="376"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="296 328 296 336 328 336 328 328 328 304 296 304 296 328"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="296"
          y="376"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="376"
          y="304"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="376"
          y="376"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-fastfood" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M474.183,120H360V40H328v80H200v32h17.92l6.154,48H112a80.091,80.091,0,0,0-80,80v16H312V280a79.508,79.508,0,0,0-8-34.846,80.248,80.248,0,0,0-47.155-41.185L250.183,152H437.817l-35.9,280H32v32H430.08l40-312H496V120ZM277.258,264H66.742A48.083,48.083,0,0,1,112,232H232A48.083,48.083,0,0,1,277.258,264Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="304 352 312 352 312 320 304 320 184 320 32 320 32 352 184 352 304 352"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="304 408 312 408 312 376 304 376 184 376 32 376 32 408 184 408 304 408"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-fax" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M487.944,233.654,424,176.815V89.373L350.627,16H152V144H80a24.028,24.028,0,0,0-24,24V472a24.028,24.028,0,0,0,24,24H496V251.593A24.024,24.024,0,0,0,487.944,233.654ZM152,464H88V176h64ZM328,48h9.373L392,102.627V112H328ZM184,48H296v96h96v72H184ZM464,464H184V248H424V219.629l40,35.557Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="232"
          y="344"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="296"
          y="344"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="232"
          y="408"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="296"
          y="408"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="360"
          y="344"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="360"
          y="408"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="160"
          height="32"
          x="232"
          y="280"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-featured-playlist" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M464,72H48a32.036,32.036,0,0,0-32,32V408a32.036,32.036,0,0,0,32,32H464a32.036,32.036,0,0,0,32-32V104A32.036,32.036,0,0,0,464,72Zm0,336H48V104H464l.02,304Z"
          className="ci-primary"
        />
        <rect
          width="184"
          height="32"
          x="232"
          y="184"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="240"
          height="32"
          x="176"
          y="256"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="240"
          height="32"
          x="176"
          y="328"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="88.923 144 88.923 272.923 188.095 203.503 88.923 144"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-file" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M334.627,16H48V496H472V153.373ZM440,166.627V168H320V48h1.373ZM80,464V48H288V200H440V464Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-filter-frames" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M384,104H128V340.117H384ZM352,308.117H160V136H352Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M181.49,428.117,256,502.628l74.51-74.511H440a32.036,32.036,0,0,0,32-32V48a32.036,32.036,0,0,0-32-32H72A32.036,32.036,0,0,0,40,48V396.117a32.036,32.036,0,0,0,32,32ZM72,48H440V396.117H317.255L256,457.372l-61.255-61.255H72Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-filter-photo" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M440,40H72A32.036,32.036,0,0,0,40,72V440a32.036,32.036,0,0,0,32,32H440a32.036,32.036,0,0,0,32-32V72A32.036,32.036,0,0,0,440,40Zm0,400H72V72H440Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M120.614,261.739l.031,2.261.317,22.978,21.874,7.041,60.183,19.373L221.8,373.034l7.051,22.387h54.3l7.051-22.387,18.782-59.642,60.183-19.373,21.874-7.041L391.355,264l.031-2.261.071-5.092.322-23.282L369.726,225.9l-56.47-19.127-23.3-68.995-7.348-21.763H229.388l-7.348,21.763-23.3,69L142.274,225.9l-22.053,7.469.322,23.282ZM224,232l28.359-83.989h7.282L288,232l71.46,24.2c-.049,3.519-.053,3.836-.1,7.354L283.428,288l-23.751,75.421h-7.354L228.572,288l-75.93-24.442c-.049-3.518-.053-3.835-.1-7.354Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-filter-square" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M472,16H40A24.027,24.027,0,0,0,16,40V472a24.027,24.027,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V40A24.028,24.028,0,0,0,472,16Zm-8,448H48V48H464Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M208,427h48.627L301,368.076V260.87L415,131.852V85H89v47.176L208,261.194ZM121,119.672V117H383v2.739L269,248.757V357.375L240.666,395H240V248.69Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-filter-x" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="40 16 40 53.828 109.024 136 150.815 136 76.896 48 459.51 48 304 242.388 304 401.373 241.373 464 240 464 240 368 208 368 208 496 254.627 496 336 414.627 336 253.612 496 53.612 496 16 40 16"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="166.403 248.225 226.864 187.763 204.237 165.135 143.775 225.597 83.313 165.135 60.687 187.763 121.148 248.225 60.687 308.687 83.313 331.314 143.775 270.852 204.237 331.314 226.864 308.687 166.403 248.225"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-filter" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M238.627,496H192V253.828l-168-200V16H480V53.612l-160,200V414.627ZM224,464h1.373L288,401.373V242.388L443.51,48H60.9L224,242.172Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-find-in-page" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M334.627,16H48V496H472V153.373ZM440,464H80V48H321.373L440,166.627Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M239.861,152a95.861,95.861,0,1,0,53.624,175.284l68.03,68.029,22.627-22.626-67.5-67.5A95.816,95.816,0,0,0,239.861,152ZM176,247.861a63.862,63.862,0,1,1,63.861,63.861A63.933,63.933,0,0,1,176,247.861Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-fingerprint" viewBox="0 0 512 512">
        <rect
          width="175.721"
          height="32"
          x="133.181"
          y="264.807"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
          transform="rotate(-45.992 221.042 280.807)"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M330.409,282.426A80,80,0,0,0,217.22,169.341l-74.908,74.908A121.268,121.268,0,0,1,56,280H48v32h8a153.052,153.052,0,0,0,108.94-45.125l74.907-74.907a48,48,0,0,1,67.883,67.883l-68.209,69.395A136.994,136.994,0,0,0,200,425.832V464h32V425.832a105.179,105.179,0,0,1,30.342-74.155Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M397.139,328.853c-19.869,21.6-82.507,85-83.138,85.633l-.1.1a12.1,12.1,0,1,1-17.362-16.87l79.154-81.381a135.935,135.935,0,0,0-.081-192.253c-53.027-53.025-139.307-53.025-192.333,0l-61.4,63.3C89.791,216,78.35,216,48,216v32c36.545,0,55.876-1.578,95.628-37.139l.423-.378,61.938-63.852a104,104,0,0,1,147,147.16L273.6,375.407a44.1,44.1,0,0,0,63.207,61.528c3.185-3.223,63.734-64.51,83.885-86.42C455.612,312.546,480,260.521,480,224H448C448,252.249,426.134,297.326,397.139,328.853Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M425.12,77.5C389.951,43.5,345.8,24,304,24V56c33.582,0,69.622,16.221,98.88,44.5C431.133,127.815,448,162.019,448,192h32C480,152.945,460,111.21,425.12,77.5Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M132.955,137.39C155.02,106.949,191.951,56,272,56V24c-96.376,0-140.988,61.545-164.955,94.61C90.759,141.078,71.446,152,48,152v32C81.476,184,110.853,167.883,132.955,137.39Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M80,336H48v32H80a56.064,56.064,0,0,1,56,56v40h32V424A88.1,88.1,0,0,0,80,336Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-fire" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M311.145,257.6c5.5-9.032,11.185-18.371,16.8-28,18.794-32.218,22.243-64.681,10.254-96.489C314.008,68.933,233.142,29.83,214.421,23.591L201.257,19.2,180.711,60.3l9.915,8.1c.111.089,11.124,9.712,11.858,24.3.627,12.453-6.2,25.91-20.286,40-9.782,9.781-20.518,19.239-31.885,29.251C102.487,204.069,48.28,251.82,48.28,342.154q0,1.861.035,3.7a151.362,151.362,0,0,0,46.444,106.49A154.177,154.177,0,0,0,202.583,496h92.1l-11.369-23.072C237.121,379.177,269.788,325.525,311.145,257.6ZM202.583,464c-66.2,0-121.05-53.267-122.274-118.739q-.028-1.546-.029-3.107c0-75.878,46.356-116.713,91.186-156.2,11.239-9.9,22.862-20.138,33.359-30.637,20.754-20.753,30.719-42.365,29.619-64.232a64.963,64.963,0,0,0-7.214-26.56c27.84,15.211,67.523,44.053,81.027,79.877,8.544,22.665,5.943,45.26-7.951,69.079-5.465,9.369-11.072,18.576-16.493,27.481C244.132,306.131,206.49,367.943,244.361,464Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M468.243,341.129q-.4-1.586-.834-3.185c-11.546-42.332-75.457-96.762-82.706-102.829l-14.557-12.182L360.6,239.341c-21.753,37.4-40.421,71.512-48.559,110.212-9.279,44.134-3.033,88.989,19.1,137.13L335.422,496H346.3a125.168,125.168,0,0,0,99.3-48.5A123.175,123.175,0,0,0,468.243,341.129Zm-47.88,86.683a93.3,93.3,0,0,1-64.44,35.7c-31.541-75.9-12.931-127.635,22.63-191.114,23.642,21.994,52.455,53.69,57.983,73.961q.349,1.283.669,2.554A91.372,91.372,0,0,1,420.363,427.812Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-flag-alt" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M64,16V496H96V360H448V322.762L363.841,208,448,93.238V56H96V16ZM412.159,88l-88,120,88,120H96V88Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-flight-takeoff" viewBox="0 0 512 512">
        <rect
          width="480"
          height="32"
          x="16"
          y="464"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M455.688,152.164c-23.388-6.515-48.252-6.053-70.008,1.3l-.894.3-65.1,30.94L129.705,109.176a47.719,47.719,0,0,0-49.771,8.862L54.5,140.836a24,24,0,0,0,2.145,37.452l117.767,83.458-45.173,23.663L93.464,252.722a48.067,48.067,0,0,0-51.47-8.6l-19.455,8.435a24,24,0,0,0-11.642,33.3L83.718,422.684,480.3,227.21c23.746-11.177,26.641-29.045,21.419-42.059C495.931,170.723,479.151,158.7,455.688,152.164Zm10.9,46.133-.149.07L97.394,380.267l-54.176-101.8,11.5-4.987a16.021,16.021,0,0,1,17.157,2.867l52.336,47.819,111.329-58.318L83.322,157.974l17.971-16.108a15.908,15.908,0,0,1,16.59-2.954l202.943,80.681,75.95-36.095c15.456-5.009,33.863-5.165,50.662-.413,13.834,3.914,21.182,9.6,23.672,12.582A24.211,24.211,0,0,1,466.59,198.3Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-flip-to-back" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M64,496H400V464H64a16.019,16.019,0,0,1-16-16V120H16V448A48.055,48.055,0,0,0,64,496Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="464"
          y="368"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="29.091"
          height="32"
          x="173.091"
          y="368"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="29.091"
          height="32"
          x="405.818"
          y="368"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="29.091"
          height="32"
          x="231.272"
          y="368"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="29.091"
          height="32"
          x="289.455"
          y="368"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="29.091"
          height="32"
          x="347.637"
          y="368"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="112"
          y="368"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="29.091"
          x="112"
          y="135.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="29.091"
          x="112"
          y="77.091"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="29.091"
          x="112"
          y="309.818"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="29.091"
          x="112"
          y="251.637"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="29.091"
          x="112"
          y="193.455"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="112"
          y="16"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="29.091"
          height="32"
          x="289.454"
          y="16"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="29.091"
          height="32"
          x="231.272"
          y="16"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="29.091"
          height="32"
          x="405.818"
          y="16"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="29.091"
          height="32"
          x="173.091"
          y="16"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="29.091"
          height="32"
          x="347.637"
          y="16"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="464"
          y="16"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="29.091"
          x="464"
          y="309.818"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="29.091"
          x="464"
          y="77.091"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="29.091"
          x="464"
          y="193.454"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="29.091"
          x="464"
          y="135.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="29.091"
          x="464"
          y="251.637"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-flip-to-front" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M464,16H144a32.036,32.036,0,0,0-32,32V368a32.036,32.036,0,0,0,32,32H464a32.036,32.036,0,0,0,32-32V48A32.036,32.036,0,0,0,464,16Zm0,352H144V48H464l.021,320Z"
          className="ci-primary"
        />
        <rect
          width="30.77"
          height="32"
          x="77.846"
          y="464"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="30.77"
          height="32"
          x="384"
          y="464"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="30.77"
          height="32"
          x="200.308"
          y="464"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="30.769"
          height="32"
          x="139.077"
          y="464"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="30.769"
          height="32"
          x="261.539"
          y="464"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="30.77"
          height="32"
          x="322.769"
          y="464"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="16"
          y="464"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="30.154"
          x="16"
          y="224.308"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="30.154"
          x="16"
          y="284.461"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="30.154"
          x="16"
          y="404.769"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="30.154"
          x="16"
          y="344.615"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="30.154"
          x="16"
          y="164.154"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="30.154"
          x="16"
          y="104"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-flip" viewBox="0 0 512 512">
        <rect
          width="32"
          height="32"
          x="296"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="368"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="296"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="368"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="440"
          y="40"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="440"
          y="105.454"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="440"
          y="172.363"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="440"
          y="373.091"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="440"
          y="239.272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="33.454"
          x="440"
          y="306.182"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="440"
          y="440"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M40,456a16,16,0,0,0,16,16H224v24h32V16H224V40H56A16,16,0,0,0,40,56ZM72,72H224V440H72Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-flower" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M408,304a168.212,168.212,0,0,0-152,96.5A168.212,168.212,0,0,0,104,304H16v16c0,92.636,75.364,168,168,168H328c92.636,0,168-75.364,168-168V304ZM184,456c-69.581,0-127.124-52.519-135.064-120H104c69.581,0,127.124,52.519,135.064,120Zm144,0H272.936c7.94-67.481,65.483-120,135.064-120h55.064C455.124,403.481,397.581,456,328,456Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M169.227,262.773a87.36,87.36,0,0,0,24.547,47.453l4.687,4.686h6.627A87.354,87.354,0,0,0,256,298.716a87.356,87.356,0,0,0,50.912,16.2h6.627l4.687-4.686a87.36,87.36,0,0,0,24.547-47.453,87.36,87.36,0,0,0,47.453-24.547l4.686-4.687v-6.627A87.354,87.354,0,0,0,378.716,176a87.356,87.356,0,0,0,16.2-50.912v-6.627l-4.686-4.687a87.36,87.36,0,0,0-47.453-24.547,87.36,87.36,0,0,0-24.547-47.453l-4.687-4.686h-6.627A87.356,87.356,0,0,0,256,53.284a87.354,87.354,0,0,0-50.912-16.2h-6.627l-4.687,4.686a87.36,87.36,0,0,0-24.547,47.453,87.36,87.36,0,0,0-47.453,24.547l-4.686,4.687v6.627A87.356,87.356,0,0,0,133.284,176a87.354,87.354,0,0,0-16.2,50.912v6.627l4.686,4.687A87.36,87.36,0,0,0,169.227,262.773Zm-3.736-98.086a55.571,55.571,0,0,1-16-32.8A55.572,55.572,0,0,1,184,120h16V104a55.572,55.572,0,0,1,11.884-34.506,55.57,55.57,0,0,1,32.8,16L256,96.8l11.313-11.313a55.571,55.571,0,0,1,32.8-16A55.572,55.572,0,0,1,312,104v16h16a55.572,55.572,0,0,1,34.506,11.884,55.571,55.571,0,0,1-16,32.8L335.2,176l11.314,11.314a55.57,55.57,0,0,1,16,32.8A55.572,55.572,0,0,1,328,232H312v16a55.572,55.572,0,0,1-11.884,34.506,55.571,55.571,0,0,1-32.8-16L256,255.2,244.686,266.51a55.57,55.57,0,0,1-32.8,16A55.572,55.572,0,0,1,200,248V232H184a55.572,55.572,0,0,1-34.506-11.884,55.57,55.57,0,0,1,16-32.8L176.8,176Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-folder-open" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M488.671,221.645a23.848,23.848,0,0,0-18.917-9.231h-66.2V160a23.138,23.138,0,0,0-23.112-23.111h-136.3L226.37,94.22A23.051,23.051,0,0,0,205.037,80H39.111A23.138,23.138,0,0,0,16,103.111V467.556H436.707l56.33-225.321A23.849,23.849,0,0,0,488.671,221.645ZM48,435.556V112H199.111l23.7,56.889H371.556v43.525H137.587A23.965,23.965,0,0,0,114.3,230.593L63.063,435.556Zm363.723,0H96.048l47.785-191.142H459.508Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-folder" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M472,472H40a24.028,24.028,0,0,1-24-24V64A24.028,24.028,0,0,1,40,40H226.667a23.935,23.935,0,0,1,22.154,14.77L269.333,104H472a24.028,24.028,0,0,1,24,24V448A24.028,24.028,0,0,1,472,472ZM48,440H464V136H248L221.333,72H48Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-font" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M221.631,109,109.92,392h58.055l24.079-61H319.946l24.079,61H402.08L290.369,109ZM213.37,277,256,169l42.63,108Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M16,496H496V16H16ZM48,48H464V464H48Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-football" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M425.706,86.294A240,240,0,0,0,86.294,425.706,240,240,0,0,0,425.706,86.294Zm-4.464,43.535A206.875,206.875,0,0,1,463.824,247.8l-66.14-49.772ZM316.033,56.845l-58.378,43.37L196.53,56.677a208.143,208.143,0,0,1,119.5.168ZM116.8,198.047,48.156,248.33A206.9,206.9,0,0,1,91.248,129.189ZM86.2,376h79.365L190.6,453.458A208.923,208.923,0,0,1,86.2,376Zm140.787,85.967L188.85,344H67.562a206.3,206.3,0,0,1-17.324-57.527l104.967-76.9L115.557,102.715a208.938,208.938,0,0,1,45.714-31.864l96.781,68.934,92.741-68.9a208.922,208.922,0,0,1,45.884,32.048L359.833,209.6l101.951,76.721A206.272,206.272,0,0,1,444.438,344H327.512L285.467,461.9a208.076,208.076,0,0,1-58.482.064Zm95.606-8.9L350.075,376H425.8A208.961,208.961,0,0,1,322.591,453.069Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M346.809,223.427,257.854,158.8,168.9,223.427,202.876,328H312.831ZM289.582,296H226.125l-19.609-60.351,51.338-37.3,51.337,37.3Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-fork" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M124,166.291V345.709a76,76,0,1,0,32,0V282H308a80.091,80.091,0,0,0,80-80V165.311a75.983,75.983,0,1,0-32,1.733V202a48.055,48.055,0,0,1-48,48H156V166.291a76,76,0,1,0-32,0ZM324,92a44,44,0,1,1,44,44A44.049,44.049,0,0,1,324,92ZM184,420a44,44,0,1,1-44-44A44.049,44.049,0,0,1,184,420ZM140,48A44,44,0,1,1,96,92,44.049,44.049,0,0,1,140,48Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-fridge" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M376,16H136A48.054,48.054,0,0,0,88,64V464a32.036,32.036,0,0,0,32,32H392a32.036,32.036,0,0,0,32-32V64A48.054,48.054,0,0,0,376,16Zm16,448H120V240H392Zm0-256H120V64a16.019,16.019,0,0,1,16-16H376a16.019,16.019,0,0,1,16,16Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="96"
          x="144"
          y="280"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="64"
          x="144"
          y="104"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-frown" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
          className="ci-primary"
        />
        <rect
          width="40"
          height="40"
          x="152"
          y="200"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="40"
          height="40"
          x="320"
          y="200"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,288a88.1,88.1,0,0,0-88,88h32a56,56,0,0,1,112,0h32A88.1,88.1,0,0,0,256,288Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-fullscreen-exit" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="204 181.372 38.628 16 16 16 16 38.628 181.372 204 44 204 44 236 236 236 236 44 204 44 204 181.372"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="326.628 304 464 304 464 272 272 272 272 464 304 464 304 326.628 473.372 496 496 496 496 473.372 326.628 304"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-fullscreen" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="208 48 208 16 16 16 16 208 48 208 48 70.627 208.687 231.313 231.313 208.687 70.627 48 208 48"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="464 304 464 441.373 299.313 276.687 276.687 299.313 441.373 464 304 464 304 496 496 496 496 304 464 304"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-functions-alt" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="128 416 360 416 360 384 160 384 160 374.283 269.834 256 160 137.717 160 128 360 128 360 96 128 96 128 150.283 226.166 256 128 361.717 128 416"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-functions" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M402.034,206.447l-67.528,65.278-3.046-14.231-.044-.2a63.447,63.447,0,0,0-59.129-49.282l-.329-.014H204.774l18.846-87.688A31.451,31.451,0,0,1,252.549,96h47.637V64h-48l-.659.014A63.452,63.452,0,0,0,192.4,113.3L172.044,208H88v32h77.166l-32.6,151.688A31.451,31.451,0,0,1,103.637,416H56v32h48.329l.329-.014a63.452,63.452,0,0,0,59.13-49.282L197.9,240h73.369a31.453,31.453,0,0,1,28.925,24.3l7.2,33.639L193.531,408h46.042l75.711-73.187,5.07,23.693.043.2a63.449,63.449,0,0,0,59.13,49.282L432,408V376H380.549a31.452,31.452,0,0,1-28.927-24.3L342.4,308.6,448.076,206.447Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-gamepad" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M368,168H272V104H448a24.027,24.027,0,0,0,24-24V16H440V72H264a24.027,24.027,0,0,0-24,24v72H144A128.145,128.145,0,0,0,16,296V396.953A91.15,91.15,0,0,0,107.047,488h1.8A90.807,90.807,0,0,0,178.8,455.24l52.7-63.24h48.628l52.666,68.465A91.046,91.046,0,0,0,496,404.953V296A128.145,128.145,0,0,0,368,168Zm96,236.953a59.047,59.047,0,0,1-105.849,36L295.878,360H216.506l-62.294,74.754A58.893,58.893,0,0,1,108.85,456h-1.8A59.113,59.113,0,0,1,48,396.953V296a96.108,96.108,0,0,1,96-96H368a96.108,96.108,0,0,1,96,96Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="360"
          y="248"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="360"
          y="328"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="320"
          y="288"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="400"
          y="288"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="152 248 120 248 120 288 80 288 80 320 120 320 120 360 152 360 152 320 192 320 192 288 152 288 152 248"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-garage" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M448,255.454h-.511L407.067,164.5A48.044,48.044,0,0,0,363.2,136H148.8a48.043,48.043,0,0,0-43.863,28.5L64.511,255.454H64a32.036,32.036,0,0,0-32,32v112a32.036,32.036,0,0,0,32,32V472a24.028,24.028,0,0,0,24,24h56a24.028,24.028,0,0,0,24-24V431.454H344V472a24.028,24.028,0,0,0,24,24h56a24.028,24.028,0,0,0,24-24V431.454a32.036,32.036,0,0,0,32-32v-112A32.036,32.036,0,0,0,448,255.454ZM134.175,177.5A16.013,16.013,0,0,1,148.8,168H363.2a16.014,16.014,0,0,1,14.621,9.5l34.646,77.953H99.529ZM136,464H96V431.454h40Zm280,0H376V431.454h40Zm32-64.546H64v-112H448Z"
          className="ci-primary"
        />
        <rect
          width="80"
          height="32"
          x="96"
          y="328"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="80"
          height="32"
          x="336"
          y="328"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="256 14.758 16 111.121 16 145.604 256 49.242 496 145.604 496 111.121 256 14.758"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-gem" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M408.563,48H103.438L16,179.156v24.786L199.421,480H312.579L496,203.942V179.156ZM391.438,80l63.407,95.111H347.739L317.808,80Zm-163.7,0h56.524l29.93,95.111H197.808ZM120.563,80h73.629l-29.931,95.111H57.155Zm96.016,368L56.525,207.111H163.318L219.813,448Zm36.1,0L196.187,207.111H315.813L259.318,448Zm42.739,0h-3.234l56.5-240.889H455.475Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-gif" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M64,136V360a32.036,32.036,0,0,0,32,32h96V232H128v32h32v96H96V136h96V104H96A32.036,32.036,0,0,0,64,136Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="288"
          x="240"
          y="104"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="448 136 448 104 328 104 328 392 360 392 360 264 432 264 432 232 360 232 360 136 448 136"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-gift" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M472,128H371.833A71.962,71.962,0,0,0,256,42.815,71.962,71.962,0,0,0,140.167,128H40a24.028,24.028,0,0,0-24,24V473.556C16,485.932,26.767,496,40,496H472c13.233,0,24-10.068,24-22.444V152A24.028,24.028,0,0,0,472,128ZM312,48a40,40,0,0,1,0,80H272V88A40.045,40.045,0,0,1,312,48ZM160,88a40,40,0,0,1,80,0v40H200A40.045,40.045,0,0,1,160,88ZM48,464V256H192V464Zm176,0V256h64V464Zm240,0H320V256H464ZM48,224V160H464v64Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-globe-alt" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM175.047,447.667A208.26,208.26,0,0,1,64.333,175.047c1.018-2.408,2.092-4.785,3.2-7.145L120,215.126v63.235L197.1,360H236v49.047l-47.052,43.915Q181.926,450.568,175.047,447.667Zm228.031-44.589A207.253,207.253,0,0,1,256,464a210.4,210.4,0,0,1-29.722-2.107L268,422.953V328H210.9L152,265.639V200.874L83.7,139.408a209.259,209.259,0,0,1,91.343-75.075A207.793,207.793,0,0,1,371.3,82.839l-45.564,58.582,15.49,38.725-10.485,10.485-78.618-15.723L208,208v88H384l50.345,67.126A208.127,208.127,0,0,1,403.078,403.078ZM464,256a206.763,206.763,0,0,1-13.873,74.837L400,264H240V224l19.877-14.908,81.382,16.277,37.515-37.515-16.51-41.275,34.2-43.977q3.361,3.084,6.61,6.32A207.253,207.253,0,0,1,464,256Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-golf-alt" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="161.846 320 353.846 320 358.769 288 166.769 288 161.846 320"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M467.122,16,450.7,128H421.175L439.49,16H407.065L371.744,232H155.819a48.051,48.051,0,0,0-47.152,39.019l-9.354,49.106A88,88,0,1,0,188.673,432H314.05A144,144,0,0,0,456.639,308.111L499.464,16ZM104,464a56,56,0,1,1,56-56A56.063,56.063,0,0,1,104,464ZM424.963,303.567A111.266,111.266,0,0,1,400,359.585,113.582,113.582,0,0,1,371.477,384a111.226,111.226,0,0,1-57.427,16H191.633a87.325,87.325,0,0,0-5.657-24H345.231l4.923-32H164.333q-2.626-2.476-5.451-4.735a87.882,87.882,0,0,0-27.783-14.99L139.532,280l.571-2.994A16.015,16.015,0,0,1,155.819,264H398.936l17.006-104H446.01Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-golf" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M378.841,342.034C339.372,327.825,287.223,320,232,320a537.769,537.769,0,0,0-80,5.793V211.157l152-56V117.026l-152-71.2V16H120V416h32V358.166A501.048,501.048,0,0,1,232,352c51.621,0,99.921,7.153,136,20.143C403.43,384.9,416,399.43,416,408s-12.57,23.1-48,35.857C331.921,456.847,283.621,464,232,464s-99.921-7.153-136-20.143C60.57,431.1,48,416.57,48,408c0-7.89,10.669-20.832,40-32.788V341.036c-.952.33-1.9.661-2.841,1C28,362.612,16,389.265,16,408s12,45.388,69.159,65.966C124.628,488.175,176.777,496,232,496s107.372-7.825,146.841-22.034C436,453.388,448,426.735,448,408S436,362.612,378.841,342.034ZM152,81.163l114.586,53.675L152,177.054Z"
          className="ci-primary"
        />
        <circle
          cx="432"
          cy="280"
          r="32"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-gradient" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M440,40H72A16,16,0,0,0,56,56V456a16,16,0,0,0,16,16H440a16,16,0,0,0,16-16V56A16,16,0,0,0,440,40ZM424,232H376v48h48v48H376v40H328V328H280v40H232V328H184v40H136V328H88V280h48V232H88V72H424Z"
          className="ci-primary"
        />
        <rect
          width="48"
          height="48"
          x="136"
          y="280"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="48"
          height="48"
          x="184"
          y="232"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="48"
          height="48"
          x="232"
          y="280"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="48"
          height="48"
          x="280"
          y="232"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="48"
          height="48"
          x="328"
          y="280"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="48"
          height="48"
          x="136"
          y="184"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="48"
          height="48"
          x="232"
          y="184"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="48"
          height="48"
          x="328"
          y="184"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-grain" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M88,16a56,56,0,1,0,56,56A56.063,56.063,0,0,0,88,16Zm0,80a24,24,0,1,1,24-24A24.028,24.028,0,0,1,88,96Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M200,138.667a56,56,0,1,0,56,56A56.063,56.063,0,0,0,200,138.667Zm0,80a24,24,0,1,1,24-24A24.028,24.028,0,0,1,200,218.667Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M88,373.333a56,56,0,1,0-56-56A56.063,56.063,0,0,0,88,373.333Zm0-80a24,24,0,1,1-24,24A24.028,24.028,0,0,1,88,293.333Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M200,496a56,56,0,1,0-56-56A56.063,56.063,0,0,0,200,496Zm0-80a24,24,0,1,1-24,24A24.028,24.028,0,0,1,200,416Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M312,16a56,56,0,1,0,56,56A56.063,56.063,0,0,0,312,16Zm0,80a24,24,0,1,1,24-24A24.028,24.028,0,0,1,312,96Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M424,138.667a56,56,0,1,0,56,56A56.063,56.063,0,0,0,424,138.667Zm0,80a24,24,0,1,1,24-24A24.028,24.028,0,0,1,424,218.667Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M312,373.333a56,56,0,1,0-56-56A56.063,56.063,0,0,0,312,373.333Zm0-80a24,24,0,1,1-24,24A24.028,24.028,0,0,1,312,293.333Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M424,384a56,56,0,1,0,56,56A56.063,56.063,0,0,0,424,384Zm0,80a24,24,0,1,1,24-24A24.028,24.028,0,0,1,424,464Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-graph" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M432,32a63.973,63.973,0,0,0-34.344,117.963L355.894,296.13c-1.289-.078-2.585-.13-3.894-.13a63.659,63.659,0,0,0-38.193,12.678l-77.154-64.295A64,64,0,1,0,131.259,269.7L85.967,360.288C84,360.105,82.013,360,80,360a64.082,64.082,0,1,0,36.243,11.29l42.8-85.589a63.845,63.845,0,0,0,59.982-14.356l74.7,62.252a64,64,0,1,0,92.621-27.56L428.106,159.87c1.289.078,2.585.13,3.894.13a64,64,0,0,0,0-128ZM80,456a32,32,0,1,1,32-32A32.036,32.036,0,0,1,80,456Zm96-200a32,32,0,1,1,32-32A32.036,32.036,0,0,1,176,256ZM352,392a32,32,0,1,1,32-32A32.036,32.036,0,0,1,352,392Zm80-264a32,32,0,1,1,32-32A32.036,32.036,0,0,1,432,128Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-grid-slash" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M464.453,395V63.547a16,16,0,0,0-16-16H117l32,32h26.847v26.847l32,32V79.547h96.3v96.3H245.3l32,32h26.847V234.7l32,32V207.849h96.3v96.3H373.606l32,32h26.847V363Zm-128.3-219.149v-96.3h96.3v96.3Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M16,16.667V39.294L47.547,70.841V448.453a16,16,0,0,0,16,16H441.159l32.214,32.214H496V474.04L38.626,16.667ZM336.151,359.445l73.008,73.008H336.151Zm-128.3-128.3,73.008,73.008H207.849Zm0,105.008h96.3v96.3h-96.3Zm-128.3-233.31,73.008,73.008H79.547Zm0,105.008h96.3v96.3h-96.3Zm0,128.3h96.3v96.3h-96.3Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-grid" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M47.547,63.547V448.453a16,16,0,0,0,16,16H448.453a16,16,0,0,0,16-16V63.547a16,16,0,0,0-16-16H63.547A16,16,0,0,0,47.547,63.547Zm288.6,16h96.3v96.3h-96.3Zm0,128.3h96.3v96.3h-96.3Zm0,128.3h96.3v96.3h-96.3Zm-128.3-256.6h96.3v96.3h-96.3Zm0,128.3h96.3v96.3h-96.3Zm0,128.3h96.3v96.3h-96.3Zm-128.3-256.6h96.3v96.3h-96.3Zm0,128.3h96.3v96.3h-96.3Zm0,128.3h96.3v96.3h-96.3Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-group" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M462.541,316.3l-64.344-42.1,24.774-45.418A79.124,79.124,0,0,0,432.093,192V120A103.941,103.941,0,0,0,257.484,43.523L279.232,67a71.989,71.989,0,0,1,120.861,53v72a46.809,46.809,0,0,1-5.215,21.452L355.962,284.8l89.058,58.274a42.16,42.16,0,0,1,19.073,35.421V432h-72v32h104V378.494A74.061,74.061,0,0,0,462.541,316.3Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M318.541,348.3l-64.343-42.1,24.773-45.418A79.124,79.124,0,0,0,288.093,224V152A104.212,104.212,0,0,0,184.04,47.866C126.723,47.866,80.093,94.581,80.093,152v72a78,78,0,0,0,9.015,36.775l24.908,45.664L50.047,348.3A74.022,74.022,0,0,0,16.5,410.4L16,496H352.093V410.494A74.061,74.061,0,0,0,318.541,348.3ZM320.093,464H48.186l.31-53.506a42.158,42.158,0,0,1,19.073-35.421l88.682-58.029L117.2,245.452A46.838,46.838,0,0,1,112.093,224V152a72,72,0,1,1,144,0v72a46.809,46.809,0,0,1-5.215,21.452L211.962,316.8l89.058,58.274a42.16,42.16,0,0,1,19.073,35.421Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-hamburger-menu" viewBox="0 0 512 512">
        <rect
          width="352"
          height="32"
          x="80"
          y="96"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="352"
          height="32"
          x="80"
          y="240"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="352"
          height="32"
          x="80"
          y="384"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-hand-point-down" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M460.579,101.868,409.06,16H264.892L41.573,263.245a24,24,0,0,0,2.007,34.148A90.41,90.41,0,0,0,173.089,286.6L191.582,264H216V444a52,52,0,0,0,104,0V332.162l126.423-35.119A24.071,24.071,0,0,0,464,273.919v-159.7A24.006,24.006,0,0,0,460.579,101.868ZM432,267.838l-144,40V444a20,20,0,0,1-40,0V232H176.418l-28.1,34.34a58.439,58.439,0,0,1-77.181,11.91L279.108,48H390.94L432,116.433Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-hand-point-left" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M397.784,472h-159.7a24.072,24.072,0,0,1-23.124-17.576L179.838,328H68a52,52,0,0,1,0-104H248V199.582l-22.6-18.494A90.41,90.41,0,0,1,214.607,51.58a24,24,0,0,1,34.149-2.006L496,272.891V417.059L410.132,468.58A24,24,0,0,1,397.784,472ZM244.161,440H395.568L464,398.941V287.109L233.75,79.141a58.437,58.437,0,0,0,11.91,77.18l34.34,28.1V256H68a20,20,0,0,0,0,40H204.162ZM227.307,73.321l.023.02Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-hand-point-right" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M273.919,472h-159.7a24,24,0,0,1-12.349-3.421L16,417.059V272.891L263.244,49.574a24,24,0,0,1,34.149,2.007A90.409,90.409,0,0,1,286.6,181.088L264,199.582V224H444a52,52,0,0,1,0,104H332.162L297.043,454.423A24.071,24.071,0,0,1,273.919,472ZM116.432,440H267.838l40-144H444a20,20,0,0,0,0-40H232V184.418l34.34-28.1a58.437,58.437,0,0,0,11.91-77.18L48,287.109V398.941ZM284.693,73.321l-.023.02.023-.02Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-hand-point-up" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M417.059,497.692H272.891L49.574,250.448A24,24,0,0,1,51.581,216.3a90.409,90.409,0,0,1,129.507,10.789l18.494,22.6H224v-180a52,52,0,0,1,104,0V181.531l126.423,35.118A24.071,24.071,0,0,1,472,239.773v159.7a24,24,0,0,1-3.421,12.349Zm-129.95-32H398.941L440,397.26V245.854l-144-40V69.692a20,20,0,0,0-40,0v212H184.418l-28.1-34.34a58.437,58.437,0,0,0-77.18-11.91Zm158.718-218.22.033.009Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-handshake" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M262.254,128H365.717l67.933,64H496V160H446.35L378.416,96H120.829a25.235,25.235,0,0,0-18.177,7.786L41.367,168.147,16.093,168l-.186,32,39.1.227L123.782,128H217l-74.341,74.333a58.153,58.153,0,0,0,82.237,82.245l24.065-24.062,95.413,95.414L325.13,376.124a11.337,11.337,0,0,1-16.224.195l-54.16-54.16-22.627,22.628,39.988,39.987-18.649,19.057a11.335,11.335,0,0,1-16.118.086L182.916,349.5l-22.627,22.628,24.67,24.669-14.786,15.656a11.338,11.338,0,0,1-16.219.271L70.71,328H16v32H57.29l73.9,75.208.1.1A42.978,42.978,0,0,0,161.911,448c.212,0,.427,0,.639,0a42.994,42.994,0,0,0,30.887-13.576L207.6,419.428l7.117,7.117a43.021,43.021,0,0,0,30.636,12.693h.24a43.029,43.029,0,0,0,30.739-13.025l19.572-20a43.009,43.009,0,0,0,21.006,5.427c.179,0,.36,0,.539,0A43,43,0,0,0,348.3,398.2l20.382-21.39h62.044l40-40.809H496V304H457.278l-40,40.809H378.5L271.586,237.89,302.281,207.2,279.654,184.57l-77.388,77.379a26.153,26.153,0,0,1-36.983-36.988Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-happy" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
          className="ci-primary"
        />
        <rect
          width="40"
          height="40"
          x="152"
          y="200"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="40"
          height="40"
          x="320"
          y="200"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M338.289,307.2A83.6,83.6,0,0,1,260.3,360H251.7a83.6,83.6,0,0,1-77.992-52.8l-1.279-3.2H137.968L144,319.081A116,116,0,0,0,251.7,392H260.3A116,116,0,0,0,368,319.081L374.032,304H339.568Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-hd" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M364,136H272V376h92a52.059,52.059,0,0,0,52-52V188A52.059,52.059,0,0,0,364,136Zm20,188a20.023,20.023,0,0,1-20,20H304V168h60a20.023,20.023,0,0,1,20,20Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="208 240 128 240 128 136 96 136 96 376 128 376 128 272 208 272 208 376 240 376 240 136 208 136 208 240"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M464,16H48A32.036,32.036,0,0,0,16,48V464a32.036,32.036,0,0,0,32,32H464a32.036,32.036,0,0,0,32-32V48A32.036,32.036,0,0,0,464,16Zm0,448H48V48H464l.02,416Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-hdr" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M192,104V392h96a32.036,32.036,0,0,0,32-32V136a32.036,32.036,0,0,0-32-32Zm96,256H224V136h64Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="160 392 160 104 128 104 128 232 64 232 64 104 32 104 32 392 64 392 64 264 128 264 128 392 160 392"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M480,232V136a32.036,32.036,0,0,0-32-32H352V392h32V264h29.167L440,331.081V392h32V324.919L447.632,264H448A32.036,32.036,0,0,0,480,232Zm-96,0V136h64v96Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-header" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M16,496H496V16H16ZM48,48H464V464H48Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="288 144 320 144 320 240 192 240 192 144 224 144 224 112 96 112 96 144 128 144 128 368 96 368 96 400 224 400 224 368 192 368 192 272 320 272 320 368 288 368 288 400 416 400 416 368 384 368 384 144 416 144 416 112 288 112 288 144"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-headphones" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M448,216H400V184c0-79.4-64.6-144-144-144S112,104.6,112,184v32H64a48.055,48.055,0,0,0-48,48V392a48.055,48.055,0,0,0,48,48h48a32.036,32.036,0,0,0,32-32V184a112,112,0,0,1,224,0V408a32.036,32.036,0,0,0,32,32h48a48.055,48.055,0,0,0,48-48V264A48.055,48.055,0,0,0,448,216ZM112,408H64a16.019,16.019,0,0,1-16-16V264a16.019,16.019,0,0,1,16-16h48v56h.008l.012,104Zm352-16a16.019,16.019,0,0,1-16,16H400V248h48a16.019,16.019,0,0,1,16,16Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-healing" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M93.976,276.6,38.211,332.367a32,32,0,0,0,0,45.255l96.167,96.168a32.038,32.038,0,0,0,45.254,0L235.4,418.024l-22.616-22.616L157.02,451.175a.094.094,0,0,1-.015-.013L60.839,355,116.6,299.23Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M473.789,134.378,377.622,38.21a32.037,32.037,0,0,0-45.254,0L276.6,93.976,299.23,116.6,355,60.838l96.166,96.167L395.4,212.772,418.024,235.4l55.765-55.764a32,32,0,0,0,0-45.255Z"
          className="ci-primary"
        />
        <rect
          width="21.941"
          height="21.941"
          x="245.515"
          y="196.544"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
          transform="rotate(-45 256.485 207.514)"
        />
        <rect
          width="21.941"
          height="21.941"
          x="245.515"
          y="293.515"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
          transform="rotate(-45 256.487 304.486)"
        />
        <rect
          width="21.941"
          height="21.941"
          x="294"
          y="245.029"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
          transform="rotate(-45 304.969 256)"
        />
        <rect
          width="21.941"
          height="21.941"
          x="197.029"
          y="245.029"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
          transform="rotate(-45 208 256)"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M321.3,462.705a47.988,47.988,0,0,0,67.641-.23l73.539-73.539a48,48,0,0,0,0-67.882l-7.764-7.765-240-240L190.946,49.525a48,48,0,0,0-67.882,0l-73.54,73.539h0a48,48,0,0,0,0,67.882l31.764,31.765L321.054,462.475C321.133,462.553,321.216,462.626,321.3,462.705ZM72.152,168.319a16,16,0,0,1,0-22.628l73.539-73.539a16,16,0,0,1,22.628,0l65.054,65.054-96.167,96.167ZM159.833,256,256,159.833,352.171,256l-96.162,96.172Zm214.961,22.627,65.054,65.054a16,16,0,0,1,0,22.628l-73.539,73.539a16,16,0,0,1-22.628,0l-65.054-65.054Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-heart" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-highlighter" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M398.789,22.31a31.762,31.762,0,0,0-22.771-9.52H376a31.769,31.769,0,0,0-22.783,9.552L87.534,292.234a32.086,32.086,0,0,0,.177,45.076l14.7,14.7L16,439.427V478H122.8l52.8-52.8,12.479,12.48a32,32,0,0,0,46-.77L492.313,160.77a31.913,31.913,0,0,0-.6-44.339ZM109.548,446H54.5l46.552-47.1,27.8,27.8Zm101.16-30.946L175.6,379.947l-24.127,24.127-27.932-27.932,23.986-24.269-37.191-37.189,48.338-49.105L257.8,364.7Zm68.958-73.74-98.541-98.54L376.017,44.791l92.923,94.121Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-highligt" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M104,305.5l88,48V480H320V353.5l88-48V160H104ZM136,192H376v94.5l-88,48V448H224V334.5l-88-48Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="72"
          x="240"
          y="32"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="72"
          x="82.544"
          y="50.544"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
          transform="rotate(-45 98.545 86.544)"
        />
        <rect
          width="72"
          height="32"
          x="377.456"
          y="70.544"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
          transform="rotate(-45 413.453 86.545)"
        />
      </symbol>
      <symbol id="cil-history" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256.25,16A240,240,0,0,0,88,84.977V16H56V144H184V112H106.287A208,208,0,0,1,256.25,48C370.8,48,464,141.2,464,255.75S370.8,463.5,256.25,463.5,48.5,370.3,48.5,255.75h-32A239.75,239.75,0,0,0,425.779,425.279,239.75,239.75,0,0,0,256.25,16Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="240 111.951 239.465 288 368 288 368 256 271.563 256 272 112.049 240 111.951"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-home" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-hospital" viewBox="0 0 512 512">
        <rect
          width="32"
          height="32"
          x="160"
          y="304"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="240"
          y="304"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="320"
          y="304"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M440,464V88H368V16H144V88H72V464H16v32H496V464ZM176,48H336V208H176ZM408,464H272V400H240v64H104V120h40V240H368V120h40Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="272 80 240 80 240 112 208 112 208 144 240 144 240 176 272 176 272 144 304 144 304 112 272 112 272 80"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-hot-tub" viewBox="0 0 512 512">
        <circle
          cx="111.485"
          cy="141.912"
          r="34.088"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M192,296h-3.041L154.05,200H82.287v96H16V448a48.054,48.054,0,0,0,48,48H448a48.054,48.054,0,0,0,48-48V296ZM464,448a16.019,16.019,0,0,1-16,16H64a16.019,16.019,0,0,1-16-16V328H464Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M296,216a20.376,20.376,0,0,1,12.362-18.748l11.881-5.091a52.4,52.4,0,0,0,0-96.321l-11.881-5.092A20.376,20.376,0,0,1,296,72V32H264V72a52.336,52.336,0,0,0,31.757,48.16l11.881,5.092a20.4,20.4,0,0,1,0,37.5l-11.881,5.091A52.338,52.338,0,0,0,264,216v48h32Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M408,216a20.376,20.376,0,0,1,12.362-18.748l11.881-5.091a52.4,52.4,0,0,0,0-96.321l-11.881-5.092A20.376,20.376,0,0,1,408,72V32H376V72a52.336,52.336,0,0,0,31.757,48.16l11.881,5.092a20.4,20.4,0,0,1,0,37.5l-11.881,5.091A52.338,52.338,0,0,0,376,216v48h32Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="72"
          x="96"
          y="360"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="72"
          x="192"
          y="360"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="72"
          x="288"
          y="360"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="72"
          x="384"
          y="360"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-house" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M408,406.545V248H288V406.545ZM320,280h56v94.545H320Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M271.078,33.749a34,34,0,0,0-47.066.984L32,226.745V496H144V336h64V496H480V225.958ZM448,464H240V304H112V464H64V240L249.412,57.356V57.3L448,240Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-https" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M400,200H388V144a128,128,0,0,0-256,0v56H120a24.028,24.028,0,0,0-24,24V472a24.028,24.028,0,0,0,24,24H400a24.028,24.028,0,0,0,24-24V224A24.028,24.028,0,0,0,400,200ZM164,144a96,96,0,0,1,192,0v56H164ZM392,464H128V232H392Z"
          className="ci-primary"
        />
        <rect
          width="40"
          height="40"
          x="240"
          y="328"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-image-broken" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="40 472 472 472 472 312 440 312 440 440 72 440 72 312 40 312 40 472"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M40,265.755l49.373,25.437,53.82-46.829,56.159,50.528L256,247.052l56.648,47.839,56.159-50.528,53.82,46.829L472,265.755V40H40ZM72,72H440V246.244l-12.738,6.564-58.809-51.171-56.471,50.806L256,205.167l-55.982,47.276-56.471-50.806L84.738,252.808,72,246.244Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-image-plus" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M336,72V40H40V472H472V184H440v25.68l-64.769-64.77L306,214.142l-100-100-134,134V72Zm39.231,118.166L440,254.935v93.207L328.628,236.769ZM206,159.4l234,234V440H72V293.4Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="448 16 416 16 416 64 368 64 368 96 416 96 416 144 448 144 448 96 496 96 496 64 448 64 448 16"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-image" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M40,472H472V40H40ZM440,348.142,328.628,236.769l46.6-46.6L440,254.935ZM72,72H440V209.68l-64.769-64.77L306,214.142l-100-100-134,134Zm0,221.4,134-134,234,234V440H72Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-inbox" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M32,16V496H480V16ZM448,304H342.111l-32,64H201.889l-32-64H64V144H448Zm0-256v64H64V48ZM64,464V336h86.111l32,64H329.889l32-64H448V464Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-indent-decrease" viewBox="0 0 512 512">
        <rect
          width="424"
          height="32"
          x="72"
          y="63.998"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="296"
          height="32"
          x="200"
          y="151.998"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="296"
          height="32"
          x="200"
          y="239.998"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="296"
          height="32"
          x="200"
          y="327.998"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="424"
          height="32"
          x="72"
          y="415.998"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M160,144.909,4.473,256,160,367.091Zm-32,160L59.527,256,128,207.091Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-indent-increase" viewBox="0 0 512 512">
        <rect
          width="424"
          height="32"
          x="72"
          y="63.998"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="296"
          height="32"
          x="200"
          y="151.998"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="296"
          height="32"
          x="200"
          y="239.998"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="296"
          height="32"
          x="200"
          y="327.998"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="424"
          height="32"
          x="72"
          y="415.998"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M16,144.909V367.091L171.527,256Zm32,62.182L116.473,256,48,304.909Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-industry-slash" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="459.26 96 328 225.697 328 96 293.45 96 229.01 161.128 251.638 183.756 296 138.92 296 228.118 333.314 265.433 464 136.303 464 396.118 496 428.118 496 416 496 96 459.26 96"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="168 16 88 16 83.882 16 168 100.118 168 16"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="136"
          y="304"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="136"
          y="376"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="216"
          y="304"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="216"
          y="376"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="296"
          y="376"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M38.627,16H16V496H496V473.373ZM48,464V70.627l88,88V248h32V190.627L441.373,464Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-industry" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M459.26,96,328,225.7V96H293.475L168,223.267V16H16V496H496V96ZM464,464H48V48h88V264h36.778L296,139.018V264h38.764L464,136.3Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="136 328 136 336 168 336 168 328 168 304 136 304 136 328"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="136"
          y="376"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="216 328 216 336 248 336 248 328 248 304 216 304 216 328"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="216"
          y="376"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="296 328 296 336 328 336 328 328 328 304 296 304 296 328"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="296"
          y="376"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="376"
          y="304"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="376"
          y="376"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-infinity" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M463.2,176.805a112,112,0,0,0-158.39,0l-48.57,48.568L207.667,176.8a112,112,0,1,0,0,158.392l48.568-48.569,48.57,48.569A112,112,0,1,0,463.2,176.805ZM185.04,312.569a80,80,0,1,1,0-113.138l55.2,55.2v2.746Zm255.528,0a80,80,0,0,1-113.136,0l-55.2-55.2v-2.744l55.2-55.2A80,80,0,1,1,440.568,312.569Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-info" viewBox="0 0 512 512">
        <rect
          width="34.924"
          height="34.924"
          x="256"
          y="95.998"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M16,496H496V16H16ZM48,48H464V464H48Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M285.313,359.032a18.123,18.123,0,0,1-15.6,8.966,18.061,18.061,0,0,1-17.327-23.157l35.67-121.277A49.577,49.577,0,0,0,194.7,190.572l-11.718,28.234,29.557,12.266,11.718-28.235a17.577,17.577,0,0,1,33.1,11.7l-35.67,121.277A50.061,50.061,0,0,0,269.709,400a50.227,50.227,0,0,0,43.25-24.853l15.1-25.913-27.646-16.115Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-input-hdmi" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M112,16V120H80V251.492l72,157.091V496H360V408.583l72-157.091V120H400V16Zm32,32H368v72H336V80H304v40H272V80H240v40H208V80H176v40H144ZM400,244.508,328,401.6V464H184V401.6L112,244.508V152H400Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-input-power" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M152,16V120H88V311.005l104,96v89H320V407.005l104-96V120H360V16H328V120H184V16ZM392,152V297L288,393V464H224V393L120,297V152Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-input" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M472,96H40a24.028,24.028,0,0,0-24,24v80H48V128H464V384H48V312H16v80a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V120A24.028,24.028,0,0,0,472,96Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="212.687 323.078 235.313 345.705 325.824 255.196 235.313 164.686 212.687 187.314 264.568 239.196 16 239.196 16 271.195 264.569 271.195 212.687 323.078"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-institution" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M247.759,14.358,16,125.946V184H496V125.638ZM464,152H48v-5.946L248.241,49.642,464,146.362Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M16,496H496V392H16Zm32-72H464v40H48Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="160"
          x="72"
          y="208"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="160"
          x="408"
          y="208"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="160"
          x="184"
          y="208"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="160"
          x="296"
          y="208"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-italic" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M16,496H496V16H16ZM48,48H464V464H48Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="200 143.998 244.442 143.998 202.442 367.998 152 367.998 152 399.998 312 399.998 312 367.998 267.558 367.998 309.558 143.998 360 143.998 360 111.998 200 111.998 200 143.998"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-justify-center" viewBox="0 0 512 512">
        <rect
          width="480"
          height="32"
          x="16"
          y="63.998"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="480"
          height="32"
          x="16"
          y="151.998"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="480"
          height="32"
          x="16"
          y="239.998"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="480"
          height="32"
          x="16"
          y="327.998"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="320"
          height="32"
          x="96"
          y="415.998"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-justify-left" viewBox="0 0 512 512">
        <rect
          width="480"
          height="32"
          x="16"
          y="63.998"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="480"
          height="32"
          x="16"
          y="151.998"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="480"
          height="32"
          x="16"
          y="239.998"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="480"
          height="32"
          x="16"
          y="327.998"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="320"
          height="32"
          x="16"
          y="415.998"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-justify-right" viewBox="0 0 512 512">
        <rect
          width="480"
          height="32"
          x="16"
          y="63.998"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="480"
          height="32"
          x="16"
          y="151.998"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="480"
          height="32"
          x="16"
          y="239.998"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="480"
          height="32"
          x="16"
          y="327.998"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="320"
          height="32"
          x="176"
          y="415.998"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-keyboard" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M472,80H40a24.028,24.028,0,0,0-24,24V344a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V104A24.028,24.028,0,0,0,472,80Zm-8,256H48V112H464Z"
          className="ci-primary"
        />
        <rect
          width="160"
          height="32"
          x="144"
          y="272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="80"
          y="272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="400"
          y="272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="336"
          y="272"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="368"
          y="208"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="304"
          y="208"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="240"
          y="208"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="176"
          y="208"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="112"
          y="208"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="336"
          y="144"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="400"
          y="144"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="272"
          y="144"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="208"
          y="144"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="144"
          y="144"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="80"
          y="144"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-lan" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M496,272V240H272V192h56a24.027,24.027,0,0,0,24-24V40a24.027,24.027,0,0,0-24-24H184a24.027,24.027,0,0,0-24,24V168a24.027,24.027,0,0,0,24,24h56v48H16v32H96v48H41.391a24.028,24.028,0,0,0-24,24V472a24.028,24.028,0,0,0,24,24H184a24.027,24.027,0,0,0,24-24V344a24.027,24.027,0,0,0-24-24H128V272H384v48H328a24.027,24.027,0,0,0-24,24V472a24.027,24.027,0,0,0,24,24H472a24.027,24.027,0,0,0,24-24V344a24.027,24.027,0,0,0-24-24H416V272ZM192,48H320V160H192ZM176,464H49.391V352H176Zm288,0H336V352H464Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-language" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M320,24H16V328H192V496H496V192H320ZM148.305,96,98.093,239.3H132l8.166-23.3H192v80H48V56H288V192H221.332L187.7,96Zm36.317,88H151.378L168,136.562ZM464,224V464H224V224Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M317.432,368.48A136.761,136.761,0,0,0,327.521,382.6q-17.4,9.384-39.521,9.4v32c24.141,0,45.71-6.408,64-18.824C370.29,417.592,391.859,424,416,424V392q-22.075,0-39.52-9.407a136.574,136.574,0,0,0,10.088-14.113A166.212,166.212,0,0,0,406.662,320H424V288H368V264H336v24H280v32h17.338A166.212,166.212,0,0,0,317.432,368.48ZM373.53,320a133.013,133.013,0,0,1-14.1,31.52A104.39,104.39,0,0,1,352,361.968a103.546,103.546,0,0,1-6.93-9.651A132.384,132.384,0,0,1,330.466,320Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-laptop" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M440,368a24.028,24.028,0,0,0,24-24V104a24.028,24.028,0,0,0-24-24H72a24.028,24.028,0,0,0-24,24V344a24.028,24.028,0,0,0,24,24ZM80,112H432V336H80Z"
          className="ci-primary"
        />
        <rect
          width="480"
          height="32"
          x="16"
          y="400"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-layers" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M487.938,162.108l-224-128a16,16,0,0,0-15.876,0l-224,128a16,16,0,0,0,.382,28l224,120a16,16,0,0,0,15.112,0l224-120a16,16,0,0,0,.382-28ZM256,277.849,65.039,175.548,256,66.428l190.961,109.12Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M263.711,394.02,480,275.061V238.539L256,361.74,32,238.539v36.522L248.289,394.02a16.005,16.005,0,0,0,15.422,0Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M32,362.667,248.471,478.118a16,16,0,0,0,15.058,0L480,362.667V326.4L256,445.867,32,326.4Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-leaf" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M389.053,126.3A302.909,302.909,0,0,0,280.012,18.15L272,13.516l-8.012,4.634A301.084,301.084,0,0,0,113.4,279.042c0,3.445.06,6.944.177,10.4,1.592,46.856,19.511,86.283,51.82,114.018,24.724,21.225,56.438,34.182,90.607,37.273V496h32V240H256V408.528c-54.064-6.263-107.873-44.455-110.444-120.174-.106-3.095-.16-6.228-.16-9.312A270.286,270.286,0,0,1,272,50.673,270.286,270.286,0,0,1,398.6,279.042c0,3.084-.054,6.217-.16,9.313-2.056,60.573-36.907,97.127-78.444,112.536v33.867a156.188,156.188,0,0,0,58.607-31.3c32.309-27.735,50.228-67.162,51.82-114.017.117-3.456.177-6.955.177-10.4A300.948,300.948,0,0,0,389.053,126.3Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-lemon" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M466.278,47.947a85.883,85.883,0,0,0-115.124-5.72,196.7,196.7,0,0,0-65.642-11.176A251.264,251.264,0,0,0,34.248,282.316a196.628,196.628,0,0,0,11.176,65.643A85.872,85.872,0,0,0,166.266,468.8a196.664,196.664,0,0,0,65.644,11.177A251.266,251.266,0,0,0,483.174,228.714,196.639,196.639,0,0,0,472,163.065,85.982,85.982,0,0,0,466.278,47.947ZM438.7,165.563a164.674,164.674,0,0,1,12.471,63.151c0,120.9-98.361,219.264-219.264,219.264a164.7,164.7,0,0,1-63.151-12.471l-10.33-4.263-7.559,8.23c-.3.331-.607.661-.928.981a53.861,53.861,0,1,1-76.171-76.171c.32-.321.65-.625.981-.93l8.229-7.558-4.262-10.329a164.713,164.713,0,0,1-12.472-63.152c0-120.9,98.362-219.263,219.265-219.263a164.709,164.709,0,0,1,63.15,12.47l10.324,4.261,7.56-8.222c.3-.326.6-.653.933-.986a53.862,53.862,0,0,1,76.172,76.172c-.324.323-.659.631-.993.939l-8.214,7.559Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M120.32,226.743l28.471,14.611A218.891,218.891,0,0,1,269.44,135.047l-10.88-30.094A250.8,250.8,0,0,0,120.32,226.743Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-level-down" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="171.313 348.686 148.687 371.314 272 494.627 395.313 371.314 372.687 348.686 288 433.373 288 96 72 96 72 128 256 128 256 433.373 171.313 348.686"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-level-up" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="80 384 80 416 296 416 296 78.627 380.687 163.314 403.313 140.686 280 17.373 156.687 140.686 179.313 163.314 264 78.627 264 384 80 384"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-library-add" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M48,464V144H16V472a24.027,24.027,0,0,0,24,24H368V464H48Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M144,400H112V80H80V408a24.027,24.027,0,0,0,24,24H432V400H144Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M472,16H168a24.027,24.027,0,0,0-24,24V344a24.027,24.027,0,0,0,24,24H472a24.027,24.027,0,0,0,24-24V40A24.027,24.027,0,0,0,472,16Zm-8,320H176V48H464Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="304 288 336 288 336 204 420 204 420 172 336 172 336 88 304 88 304 172 220 172 220 204 304 204 304 288"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-library-building" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M247.759,14.358,16,125.946V184H496V125.638ZM464,152H48v-5.946L248.241,49.642,464,146.362Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M16,496H496V392H16Zm32-72H464v40H48Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="160"
          x="72"
          y="208"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="160"
          x="408"
          y="208"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="160"
          x="184"
          y="208"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="160"
          x="296"
          y="208"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-library" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M472,16H168a24,24,0,0,0-24,24V344a24,24,0,0,0,24,24H472a24,24,0,0,0,24-24V40A24,24,0,0,0,472,16Zm-8,320H176V48H464Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M112,400V80H80V408a24,24,0,0,0,24,24H432V400Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M48,464V144H16V472a24,24,0,0,0,24,24H368V464Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-life-ring" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M425.706,86.294A240,240,0,0,0,86.294,425.706,240,240,0,0,0,425.706,86.294Zm-80.04,236.745a111.781,111.781,0,0,0,0-134.078l68.218-68.218a207.579,207.579,0,0,1,0,270.514ZM176,256a80,80,0,1,1,80,80A80.091,80.091,0,0,1,176,256ZM391.257,98.116l-68.218,68.218a111.781,111.781,0,0,0-134.078,0L120.743,98.116a207.579,207.579,0,0,1,270.514,0ZM98.116,120.743l68.218,68.218a111.781,111.781,0,0,0,0,134.078L98.116,391.257a207.579,207.579,0,0,1,0-270.514Zm22.627,293.141,68.218-68.218a111.781,111.781,0,0,0,134.078,0l68.218,68.218a207.579,207.579,0,0,1-270.514,0Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-lightbulb" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M252.592,496h6.816a108.122,108.122,0,0,0,108-108V332.308a177.481,177.481,0,0,0,66.37-138.531C433.778,95.751,354.027,16,256,16S78.222,95.751,78.222,193.777a177.477,177.477,0,0,0,66.371,138.531V388A108.121,108.121,0,0,0,252.592,496Zm6.816-32h-6.816a76.106,76.106,0,0,1-70.631-48H330.04A76.107,76.107,0,0,1,259.408,464Zm76-80H176.593V344H335.408ZM110.222,193.777C110.222,113.4,175.618,48,256,48s145.778,65.4,145.778,145.777a146.392,146.392,0,0,1-59.817,117.737L341.3,312H170.7l-.665-.486A146.394,146.394,0,0,1,110.222,193.777Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-line-spacing" viewBox="0 0 512 512">
        <rect
          width="256"
          height="32"
          x="240"
          y="48"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="256"
          height="32"
          x="240"
          y="176"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="256"
          height="32"
          x="240"
          y="304"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="256"
          height="32"
          x="240"
          y="432"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M24,368v30.19l88.937,97.728L200,398.089V368H127.2V144H200V113.81L111.063,16.082,24,113.911V144H95.2V368ZM68.538,112l42.791-48.082L155.086,112Zm86.924,288-42.791,48.082L68.914,400Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-line-style" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M16,120H496V16H16ZM48,48H464V88H48Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M240,144H16v96H240Zm-32,64H48V176H208Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M272,240H496V144H272Zm32-64H464v32H304Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M152,272H16v88H152Zm-32,56H48V304h72Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M192,360H320V272H192Zm32-56h64v24H224Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M360,360H496V272H360Zm32-56h72v24H392Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M121.442,443.278A52.721,52.721,0,1,0,68.722,496,52.78,52.78,0,0,0,121.442,443.278Zm-73.442,0A20.721,20.721,0,1,1,68.722,464,20.745,20.745,0,0,1,48,443.278Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M140.853,443.278a52.721,52.721,0,1,0,52.721-52.72A52.78,52.78,0,0,0,140.853,443.278Zm73.442,0a20.721,20.721,0,1,1-20.721-20.72A20.745,20.745,0,0,1,214.3,443.278Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M265.705,443.278a52.721,52.721,0,1,0,52.721-52.72A52.78,52.78,0,0,0,265.705,443.278Zm73.442,0a20.721,20.721,0,1,1-20.721-20.72A20.745,20.745,0,0,1,339.147,443.278Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M443.278,390.558A52.721,52.721,0,1,0,496,443.278,52.78,52.78,0,0,0,443.278,390.558Zm0,73.442A20.721,20.721,0,1,1,464,443.278,20.745,20.745,0,0,1,443.278,464Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-line-weight" viewBox="0 0 512 512">
        <rect
          width="480"
          height="32"
          x="16"
          y="464"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M16,432H496V352H16Zm32-48H464v16H48Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M16,320H496V208H16Zm32-80H464v48H48Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M16,176H496V16H16ZM48,48H464v96H48Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-link-alt" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M48,256a80.091,80.091,0,0,1,80-80H240V144H128a112,112,0,0,0,0,224H240V336H128A80.091,80.091,0,0,1,48,256Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M384,144H272v32H384a80,80,0,0,1,0,160H272v32H384a112,112,0,0,0,0-224Z"
          className="ci-primary"
        />
        <rect
          width="232"
          height="32"
          x="140"
          y="240.652"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-link-broken" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="288 496 320 496 320 368 448 368 448 336 288 336 288 496"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="224 176 224 16 192 16 192 144 64 144 64 176 224 176"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M78.708,434.573,77.429,433.3a100.478,100.478,0,0,1,0-142.1l75.2-75.2H107.372L54.8,268.57a132.478,132.478,0,0,0,0,187.35l1.278,1.278a132.628,132.628,0,0,0,187.352,0l4.57-4.57V407.373l-27.2,27.2A100.591,100.591,0,0,1,78.708,434.573Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M457.2,56.08,455.922,54.8c-51.653-51.655-135.7-51.653-187.352,0L264,59.372v45.255l27.2-27.2a100.591,100.591,0,0,1,142.095,0l1.279,1.278a100.478,100.478,0,0,1,0,142.1l-75.2,75.2h45.253L457.2,243.43a132.478,132.478,0,0,0,0-187.35Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-link" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M457.47,55.833c-53.026-53.026-139.307-53.026-192.332,0L168.971,152,191.6,174.627,287.765,78.46A104,104,0,0,1,434.843,225.539l-96.167,96.167L361.3,344.333l96.167-96.167C510.5,195.14,510.5,108.86,457.47,55.833Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M225.539,434.843a104,104,0,0,1-147.078,0h0a104,104,0,0,1,0-147.078l90.511-90.511-22.627-22.627L55.833,265.138A136,136,0,1,0,248.166,457.47l90.51-90.51-22.627-22.627Z"
          className="ci-primary"
        />
        <rect
          width="320"
          height="32"
          x="93.824"
          y="243.48"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
          transform="rotate(-45 253.823 259.48)"
        />
      </symbol>
      <symbol id="cil-list-filter" viewBox="0 0 512 512">
        <rect
          width="320"
          height="32"
          x="96"
          y="197.333"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="176"
          height="32"
          x="168"
          y="298.667"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="80"
          height="32"
          x="216"
          y="400"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="416"
          height="32"
          x="48"
          y="96"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-list-high-priority" viewBox="0 0 512 512">
        <rect
          width="240"
          height="32"
          x="256"
          y="416"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="240"
          height="32"
          x="256"
          y="309.333"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="240"
          height="32"
          x="256"
          y="202.667"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="168"
          height="32"
          x="328"
          y="96"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M302,111,167.2,27.216V96h-5.965C121.783,96,84.91,114.755,57.4,148.81,30.7,181.866,16,225.616,16,272s14.7,90.134,41.4,123.19C84.91,429.245,121.783,448,161.231,448H216V416H161.231C98.8,416,48,351.4,48,272S98.8,128,161.231,128H167.2v69.228ZM199.2,84.784,242,111.391,199.2,138.772Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-list-low-priority" viewBox="0 0 512 512">
        <rect
          width="240"
          height="32"
          x="256"
          y="56"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="240"
          height="32"
          x="256"
          y="162.667"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="240"
          height="32"
          x="256"
          y="269.333"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="168"
          height="32"
          x="328"
          y="376"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M161.231,408H167.2v68.783L302,393,167.2,306.772V376h-5.965C98.8,376,48,311.4,48,232S98.8,88,161.231,88H216V56H161.231C121.783,56,84.91,74.755,57.4,108.81,30.7,141.866,16,185.616,16,232s14.7,90.134,41.4,123.19C84.91,389.245,121.783,408,161.231,408ZM199.2,365.228,242,392.609,199.2,419.217Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-list-numbered-rtl" viewBox="0 0 512 512">
        <rect
          width="288"
          height="32"
          x="40"
          y="80"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="288"
          height="32"
          x="40"
          y="240"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="288"
          height="32"
          x="40"
          y="400"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="440 160 440 40 376 40 376 72 408 72 408 160 440 160"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="376 262.111 376 312 456 312 456 280 411.777 280 456 257.889 456 192 376 192 376 224 424 224 424 238.111 376 262.111"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="376 440 376 472 456 472 456 344 376 344 376 376 424 376 424 392 400 392 400 424 424 424 424 440 376 440"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-list-numbered" viewBox="0 0 512 512">
        <rect
          width="288"
          height="32"
          x="184"
          y="80"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="288"
          height="32"
          x="184"
          y="240"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="288"
          height="32"
          x="184"
          y="400"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="120 160 120 40 56 40 56 72 88 72 88 160 120 160"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="56 262.111 56 312 136 312 136 280 91.777 280 136 257.889 136 192 56 192 56 224 104 224 104 238.111 56 262.111"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="56 440 56 472 136 472 136 344 56 344 56 376 104 376 104 392 80 392 80 424 104 424 104 440 56 440"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-list-rich" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M136,24H16V144H136Zm-32,88H48V56h56Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M136,200H16V320H136Zm-32,88H48V232h56Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M136,376H16V496H136Zm-32,88H48V408h56Z"
          className="ci-primary"
        />
        <rect
          width="320"
          height="32"
          x="176"
          y="23.998"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="256"
          height="32"
          x="176"
          y="111.998"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="320"
          height="32"
          x="176"
          y="199.998"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="256"
          height="32"
          x="176"
          y="287.998"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="256"
          height="32"
          x="176"
          y="463.998"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="320"
          height="32"
          x="176"
          y="375.998"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-list" viewBox="0 0 512 512">
        <rect
          width="264"
          height="32"
          x="208"
          y="80"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M40,96a64,64,0,1,0,64-64A64.072,64.072,0,0,0,40,96Zm64-32A32,32,0,1,1,72,96,32.036,32.036,0,0,1,104,64Z"
          className="ci-primary"
        />
        <rect
          width="264"
          height="32"
          x="208"
          y="240"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M104,320a64,64,0,1,0-64-64A64.072,64.072,0,0,0,104,320Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,104,224Z"
          className="ci-primary"
        />
        <rect
          width="264"
          height="32"
          x="208"
          y="400"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M104,480a64,64,0,1,0-64-64A64.072,64.072,0,0,0,104,480Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,104,384Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-location-pin" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M253.924,127.592a64,64,0,1,0,64,64A64.073,64.073,0,0,0,253.924,127.592Zm0,96a32,32,0,1,1,32-32A32.037,32.037,0,0,1,253.924,223.592Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M376.906,68.515A173.922,173.922,0,0,0,108.2,286.426L229.107,472.039a29.619,29.619,0,0,0,49.635,0L399.653,286.426A173.921,173.921,0,0,0,376.906,68.515Zm-4.065,200.444L253.925,451.509,135.008,268.959C98.608,213.08,106.415,138.3,153.571,91.142a141.92,141.92,0,0,1,200.708,0C401.435,138.3,409.241,213.08,372.841,268.959Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-lock-locked" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M384,200V144a128,128,0,0,0-256,0v56H88V328c0,92.635,75.364,168,168,168s168-75.365,168-168V200ZM160,144a96,96,0,0,1,192,0v56H160ZM392,328c0,74.99-61.01,136-136,136s-136-61.01-136-136V232H392Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-lock-unlocked" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M384,200V144A128,128,0,0,0,166.418,52.57l22.4,22.855A96,96,0,0,1,352,144v56H88V328c0,92.636,75.364,168,168,168s168-75.364,168-168V200Zm8,128c0,74.99-61.009,136-136,136s-136-61.01-136-136V232H392Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-locomotive" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M328,427.127c0-.175-.012-.347-.013-.522l14.29-.357c0,.294-.022.584-.022.879a52.873,52.873,0,1,0,105.745,0c0-1.051-.04-2.092-.1-3.127H496V373.1l-24-64V243.777a47.736,47.736,0,0,0-26.534-42.932L424,190.111V96H312v88H243.532L214.473,96.82A47.941,47.941,0,0,0,168.936,64H16v82.832l40,16v50.334l-40,16V432h86.488a52.866,52.866,0,0,0,105.449-2.393l14.372-.36A52.867,52.867,0,0,0,328,427.127ZM395.127,448A20.873,20.873,0,1,1,416,427.127,20.9,20.9,0,0,1,395.127,448Zm-240,0A20.873,20.873,0,1,1,176,427.127,20.9,20.9,0,0,1,155.127,448Zm76.586-51-32.607.815A52.83,52.83,0,0,0,109.766,400H48V250.833l40-16V141.168l-40-16V96H168.936a15.979,15.979,0,0,1,15.179,10.94L220.468,216H344V128h48v81.889l39.155,19.577A15.915,15.915,0,0,1,440,243.777V296H96v32H444.912L464,378.9V392H434.6a52.78,52.78,0,0,0-80.594,1.945l-37.028.926A52.794,52.794,0,0,0,231.713,397Zm43.414,51A20.873,20.873,0,1,1,296,427.127,20.9,20.9,0,0,1,275.127,448Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-loop-1" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="208 312 208 344 320 344 320 312 280 312 280 176 248 176 248 200 216 200 216 232 248 232 248 312 208 312"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M464,210.511V264A112.127,112.127,0,0,1,352,376H78.627l44.686-44.687-22.626-22.626L56,353.373l-4.415,4.414L18.019,391.354,92.041,474.63l23.918-21.26L75.63,408H352c79.4,0,144-64.6,144-144V178.511Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M48,256A112.127,112.127,0,0,1,160,144H433.373l-44.686,44.687,22.626,22.626L456,166.627l4.117-4.116,33.864-33.865L419.959,45.37,396.041,66.63,436.37,112H160C80.6,112,16,176.6,16,256v85.787l32-32Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-loop-circular" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M415.313,358.7c36.453-36.452,55.906-85.231,54.779-137.353-1.112-51.375-21.964-99.908-58.715-136.66L388.75,107.314A166.816,166.816,0,0,1,438.1,222.039c.937,43.313-15.191,83.81-45.463,114.083l-48.617,49.051.044-89.165-32-.016L311.992,440H456.063V408H366.449Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M47.937,112h89.614L88.687,161.3c-36.453,36.451-55.906,85.231-54.779,137.352a198.676,198.676,0,0,0,58.715,136.66l22.627-22.627A166.818,166.818,0,0,1,65.9,297.962c-.937-43.314,15.191-83.811,45.463-114.083l48.617-49.051-.044,89.165,32,.015L192.008,80H47.937Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-loop" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M464,210.511V264A112.127,112.127,0,0,1,352,376H78.627l44.686-44.687-22.626-22.626L56,353.373l-4.415,4.414L18.019,391.354,92.041,474.63l23.918-21.26L75.63,408H352c79.4,0,144-64.6,144-144V178.511Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M48,256A112.127,112.127,0,0,1,160,144H433.373l-44.686,44.687,22.626,22.626L456,166.627l4.117-4.116,33.864-33.865L419.959,45.37,396.041,66.63,436.37,112H160C80.6,112,16,176.6,16,256v85.787l32-32Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-low-vision" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M397.222,139.1l-.218-.223c-61.693-61.692-154.082-74.423-228.455-38.211l24.213,24.213c60.468-24.573,132.5-12.4,181.509,36.52L464,254.683v3.107L396.179,328.3l22.63,22.63L496,270.683V241.79Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M358.99,290.323A103.984,103.984,0,0,0,221.677,153.01l25.09,25.09A71.974,71.974,0,0,1,333.9,265.233Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M16,16V37.94l99.977,99.978c-.326.321-.656.636-.981.96L16,241.79v28.893l98.778,102.689.218.222a199.715,199.715,0,0,0,257.5,20.84L474.06,496H496V472.687L39.313,16ZM81.982,219.355l17.036-17.71L293.14,395.767a168.457,168.457,0,0,1-30.727,4.018ZM48,257.79v-3.107l11.794-12.261L211.233,393.861a166.38,166.38,0,0,1-73.5-42.788ZM326.879,384.252,121.206,178.578,137.729,161.4c.29-.289.586-.567.877-.854l210.9,210.9A166.053,166.053,0,0,1,326.879,384.252Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-magnifying-glass" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-map" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M478.465,89.022,329.6,47.382,180.3,89.438,41.459,50.052h0A20,20,0,0,0,16,69.293v340.6a24.093,24.093,0,0,0,17.449,23.089l146.817,41.65,149.365-42.074,140.983,39.436A20,20,0,0,0,496,452.728V112.135A24.08,24.08,0,0,0,478.465,89.022ZM163,436.466,48,403.842V85.17l115,32.624Zm150.615-32.647L195,437.231V118.542L313.615,85.13ZM464,436.91,345.615,403.8V85.089L464,118.2Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-media-eject" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M97.088,286.56H414.912a24,24,0,0,0,18.432-39.371L274.433,56.63a24,24,0,0,0-36.866,0h0L78.656,247.189A24,24,0,0,0,97.088,286.56ZM256,84.491,397.824,254.56H114.176Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M416,328H96a24.027,24.027,0,0,0-24,24v64a24.027,24.027,0,0,0,24,24H416a24.027,24.027,0,0,0,24-24V352A24.027,24.027,0,0,0,416,328Zm-8,80H104V360H408Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-media-pause" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M200,48H72A24.028,24.028,0,0,0,48,72V440a24.028,24.028,0,0,0,24,24H200a24.028,24.028,0,0,0,24-24V72A24.028,24.028,0,0,0,200,48Zm-8,384H80V80H192Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M440,48H312a24.028,24.028,0,0,0-24,24V440a24.028,24.028,0,0,0,24,24H440a24.028,24.028,0,0,0,24-24V72A24.028,24.028,0,0,0,440,48Zm-8,384H320V80H432Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-media-play" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M444.4,235.236,132.275,49.449A24,24,0,0,0,96,70.072V434.214a24.017,24.017,0,0,0,35.907,20.839L444.03,276.7a24,24,0,0,0,.367-41.461ZM128,420.429V84.144L416.244,255.718Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-media-record" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,72C154.542,72,72,154.542,72,256s82.542,184,184,184,184-82.542,184-184S357.458,72,256,72Zm0,336c-83.813,0-152-68.187-152-152s68.187-152,152-152,152,68.187,152,152S339.813,408,256,408Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-media-skip-backward" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M455.979,424.271A24.053,24.053,0,0,0,480,400.251V112.015a24,24,0,0,0-38.285-19.286L264,224.369V112.015a24,24,0,0,0-38.285-19.286L31.155,236.847h0a24,24,0,0,0,0,38.57l194.56,144.119A24,24,0,0,0,264,400.251V287.9L441.715,419.537A23.922,23.922,0,0,0,455.979,424.271ZM232,384.37,58.88,256.132,232,127.9ZM448,127.9V384.37L274.88,256.132Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-media-skip-forward" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M32,111.882V400.118A23.979,23.979,0,0,0,70.285,419.4L248,287.763V400.118A23.979,23.979,0,0,0,286.285,419.4l194.56-144.119a24,24,0,0,0,0-38.57L286.285,92.6A24,24,0,0,0,248,111.882V224.237L70.285,92.6A24,24,0,0,0,32,111.882Zm248,15.881L453.119,256,280,384.237Zm-216,0L237.119,256,64,384.237Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-media-step-backward" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M402.8,90.58a23.876,23.876,0,0,0-25.082,2.149L183.155,236.847h0a24,24,0,0,0,0,38.57l194.56,144.119A24,24,0,0,0,416,400.251V112.015A23.882,23.882,0,0,0,402.8,90.58ZM384,384.37,210.881,256.133,384,127.9Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="336"
          x="96"
          y="88"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-media-step-forward" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M328.845,236.582,134.285,92.463A24,24,0,0,0,96,111.749V399.985a23.979,23.979,0,0,0,38.285,19.286l194.56-144.118h0a24,24,0,0,0,0-38.57ZM128,384.1V127.63L301.119,255.867Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="336"
          x="384"
          y="88"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-media-stop" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M408,80H104a24.027,24.027,0,0,0-24,24V408a24.027,24.027,0,0,0,24,24H408a24.027,24.027,0,0,0,24-24V104A24.027,24.027,0,0,0,408,80Zm-8,320H112V112H400Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-medical-cross" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M344,16H168V168H16V344H168V496H344V344H496V168H344ZM464,200V312H312V464H200V312H48V200H200V48H312V200Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-meh" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
          className="ci-primary"
        />
        <rect
          width="40"
          height="40"
          x="152"
          y="200"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="40"
          height="40"
          x="320"
          y="200"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="176"
          height="32"
          x="168"
          y="320"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-memory" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M192,320H320V192H192Zm32-96h64v64H224Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M32,288v32h72v88h88v72h32V408h64v72h32V408h88V320h72V288H408V224h72V192H408V104H320V32H288v72H224V32H192v72H104v88H32v32h72v64ZM136,136H376V376H136Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-menu" viewBox="0 0 512 512">
        <rect
          width="352"
          height="32"
          x="80"
          y="96"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="352"
          height="32"
          x="80"
          y="240"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="352"
          height="32"
          x="80"
          y="384"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-mic" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,328a96.108,96.108,0,0,0,96-96V112a96,96,0,0,0-192,0V232A96.108,96.108,0,0,0,256,328ZM192,112a64,64,0,0,1,128,0V232a64,64,0,0,1-128,0Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M400,176v56c0,79.4-64.6,144-144,144S112,311.4,112,232V176H80v56c0,91.653,70.424,167.154,160,175.265V496h32V407.265C361.576,399.154,432,323.653,432,232V176Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-microphone" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,328a96.108,96.108,0,0,0,96-96V112a96,96,0,0,0-192,0V232A96.108,96.108,0,0,0,256,328ZM192,112a64,64,0,0,1,128,0V232a64,64,0,0,1-128,0Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M400,176v56c0,79.4-64.6,144-144,144S112,311.4,112,232V176H80v56c0,91.653,70.424,167.154,160,175.265V496h32V407.265C361.576,399.154,432,323.653,432,232V176Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-minus" viewBox="0 0 512 512">
        <rect
          width="368"
          height="32"
          x="72"
          y="240"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-mobile-landscape" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M464,96H48a32.036,32.036,0,0,0-32,32V384a32.036,32.036,0,0,0,32,32H464a32.036,32.036,0,0,0,32-32V128A32.036,32.036,0,0,0,464,96ZM48,384V128H96V384.018l-48,0Zm80-256H384V384l-256,.013ZM464,384l-48,0V128h48Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-mobile" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M380,16H132a32.036,32.036,0,0,0-32,32V464a32.036,32.036,0,0,0,32,32H380a32.036,32.036,0,0,0,32-32V48A32.036,32.036,0,0,0,380,16Zm0,32V80H132V48Zm0,64,.011,224H132V112Zm0,352H132V368H380.016l0,96Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="240"
          y="400"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-money" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M432,64H16V384H432ZM400,352H48V96H400Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="464 144 464 416 96 416 96 448 496 448 496 144 464 144"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M224,302.46c39.7,0,72-35.137,72-78.326s-32.3-78.326-72-78.326-72,35.136-72,78.326S184.3,302.46,224,302.46Zm0-124.652c22.056,0,40,20.782,40,46.326s-17.944,46.326-40,46.326-40-20.782-40-46.326S201.944,177.808,224,177.808Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="176"
          x="80"
          y="136"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="176"
          x="336"
          y="136"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-monitor" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M472,16H40A24.028,24.028,0,0,0,16,40V376a24.028,24.028,0,0,0,24,24H240v64H160v32H352V464H272V400H472a24.028,24.028,0,0,0,24-24V40A24.028,24.028,0,0,0,472,16Zm-8,352H48V272H464Zm0-128H48V48H464Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="400"
          y="304"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-mood-bad" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
          className="ci-primary"
        />
        <rect
          width="40"
          height="40"
          x="152"
          y="200"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="40"
          height="40"
          x="320"
          y="200"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,280A104,104,0,0,0,152,384H360A104,104,0,0,0,256,280Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-mood-good" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
          className="ci-primary"
        />
        <rect
          width="40"
          height="40"
          x="152"
          y="200"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="40"
          height="40"
          x="320"
          y="200"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-mood-very-bad" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,280A104,104,0,0,0,152,384H360A104,104,0,0,0,256,280Z"
          className="ci-primary"
        />
        <rect
          width="32.001"
          height="96.333"
          x="148"
          y="159.834"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
          transform="rotate(-48.366 164.002 208.001)"
        />
        <rect
          width="96.333"
          height="32"
          x="291.834"
          y="192"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
          transform="rotate(-48.366 340.002 208)"
        />
      </symbol>
      <symbol id="cil-mood-very-good" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="205.757 228.292 226.243 203.708 168 155.173 109.757 203.708 130.243 228.292 168 196.827 205.757 228.292"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="285.757 203.708 306.243 228.292 344 196.827 381.757 228.292 402.243 203.708 344 155.173 285.757 203.708"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-moon" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M268.279,496c-67.574,0-130.978-26.191-178.534-73.745S16,311.293,16,243.718A252.252,252.252,0,0,1,154.183,18.676a24.44,24.44,0,0,1,34.46,28.958,220.12,220.12,0,0,0,54.8,220.923A218.746,218.746,0,0,0,399.085,333.2h0a220.2,220.2,0,0,0,65.277-9.846,24.439,24.439,0,0,1,28.959,34.461A252.256,252.256,0,0,1,268.279,496ZM153.31,55.781A219.3,219.3,0,0,0,48,243.718C48,365.181,146.816,464,268.279,464a219.3,219.3,0,0,0,187.938-105.31,252.912,252.912,0,0,1-57.13,6.513h0a250.539,250.539,0,0,1-178.268-74.016,252.147,252.147,0,0,1-67.509-235.4Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-mouse" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M448,80a24.027,24.027,0,0,0,24-24V16H440V48H264a24.027,24.027,0,0,0-24,24v40H208.625A88.725,88.725,0,0,0,120,200.625V360.571C120,435.247,180.753,496,255.429,496h1.142C331.247,496,392,435.247,392,360.571V200.625A88.725,88.725,0,0,0,303.375,112H272V80ZM152,200.625A56.689,56.689,0,0,1,208.625,144H240v88H152ZM360,360.571A103.545,103.545,0,0,1,256.571,464h-1.142A103.545,103.545,0,0,1,152,360.571V264H360ZM303.375,144A56.689,56.689,0,0,1,360,200.625V232H272V144Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-mouth-slash" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M412.8,107.2c-24.067-32.09-47.141-46.4-74.814-46.4-22.54,0-44.048,13.373-62.2,38.674A180.547,180.547,0,0,0,260.753,124.8h-9.506A180.547,180.547,0,0,0,236.211,99.47c-18.149-25.3-39.657-38.674-62.2-38.674a71.222,71.222,0,0,0-36.672,9.918L161.4,94.768A38.732,38.732,0,0,1,174.014,92.8c25.175,0,46.513,39.864,51.993,53.8l3.97,10.195h41.106L282,156.771l3.988-10.146c5.49-13.965,26.828-53.829,52-53.829,11.874,0,27.007,3.992,49.213,33.6,18.589,24.786,65.674,80.813,82.549,100.8l-44.815,120.82q-.4.834-.819,1.663c-.865,1.722-1.785,3.409-2.73,5.078l23.309,23.309a149.913,149.913,0,0,0,8.023-14.038q.719-1.434,1.41-2.885l.306-.643L496,248.439V208.682C481.2,191.157,431.347,131.926,412.8,107.2Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M387.305,320.678l45.426-102.962L331.8,172.6l-7.785,8.808c-.224.254-18.778,20.877-47.754,28.228L301.429,234.8a142.383,142.383,0,0,0,37.883-23.8L390.6,233.934l-27.564,62.475Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M16,16V37.941l77.207,77.207C71.693,143.6,29.973,197.958,16,216.151V255.29L57.441,360.15l.432.994c.461.97.933,1.934,1.411,2.884A151.245,151.245,0,0,0,116.145,425.5a155.361,155.361,0,0,0,80.63,22.5h118.45a155.361,155.361,0,0,0,80.63-22.5q2.391-1.45,4.718-2.986L474.059,496H496V472.687L39.313,16ZM191.98,213.921l87.261,87.261a807.527,807.527,0,0,0-125.816,6.192l-31.615-66.39L183.98,209.9Zm-29.2-29.2L79.422,226.4l55.192,115.9,11.649-1.665A775.645,775.645,0,0,1,313,334.937l64.233,64.233a123.347,123.347,0,0,1-62,16.83H196.775c-45.934,0-88.675-26.033-108.893-66.328q-.45-.9-.887-1.8L42.214,234.555c14.147-18.422,52.059-67.825,73.836-96.564Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-move" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="403.814 165.089 381.187 187.716 433.069 239.598 272.402 239.598 272.402 78.932 324.284 130.813 346.912 108.187 256.402 17.676 165.892 108.187 188.52 130.813 240.402 78.932 240.402 239.598 78.932 239.598 130.814 187.716 108.187 165.089 17.677 255.598 108.186 346.107 130.814 323.48 78.931 271.598 240.402 271.598 240.402 433.068 188.52 381.187 165.892 403.813 256.402 494.324 346.912 403.813 324.284 381.187 272.402 433.068 272.402 271.598 433.069 271.598 381.186 323.48 403.814 346.107 494.323 255.598 403.814 165.089"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-movie" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M136,488H495.985V24H16V488H136ZM408,56h55.985V96H408Zm0,72h55.985v40H408Zm0,72h55.985v40H408Zm0,72h55.985v40H408Zm0,72h55.985v40H408Zm0,72h55.985v40H408ZM136,200V56H375.985V240H136Zm0,216V272H375.985V456H136ZM48,56h56V96H48Zm0,72h56v40H48Zm0,72h56v40H48Zm0,72h56v40H48Zm0,72h56v40H48Zm0,72h56v40H48Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-mug-tea" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M436.574,120H352V64H32V408a64.072,64.072,0,0,0,64,64H288a64.072,64.072,0,0,0,64-64v-8h84.574A59.493,59.493,0,0,0,496,340.574V179.426A59.493,59.493,0,0,0,436.574,120Zm-275.2,118.894L192,269.521v57.373H128V269.521l30.627-30.627ZM464,340.574A27.457,27.457,0,0,1,436.574,368H320v40a32.036,32.036,0,0,1-32,32H96a32.036,32.036,0,0,1-32-32V96h80V208.266l-48,48V358.894H224V256.266l-48-48V96H320v56H436.574A27.457,27.457,0,0,1,464,179.426Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M416,180H320V340h96a20.023,20.023,0,0,0,20-20V200A20.023,20.023,0,0,0,416,180ZM404,308H352V212h52Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-mug" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M416,180H320V340h96a20.023,20.023,0,0,0,20-20V200A20.023,20.023,0,0,0,416,180ZM404,308H352V212h52Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M436.574,120H352V64H32V408a64.072,64.072,0,0,0,64,64H288a64.072,64.072,0,0,0,64-64v-8h84.574A59.493,59.493,0,0,0,496,340.574V179.426A59.493,59.493,0,0,0,436.574,120ZM464,340.574A27.457,27.457,0,0,1,436.574,368H320v40a32.036,32.036,0,0,1-32,32H96a32.036,32.036,0,0,1-32-32V96H320v56H436.574A27.457,27.457,0,0,1,464,179.426Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-music-note" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M72,203.517l160-32V381.186h.044Q232,382.588,232,384c0,55.794,48.448,101.186,108,101.186S448,439.794,448,384,399.552,282.814,340,282.814a111.434,111.434,0,0,0-76,29.367V28.483L72,66.883Zm268,111.3c41.906,0,76,31.037,76,69.186s-34.094,69.186-76,69.186S264,422.149,264,384,298.094,314.814,340,314.814ZM104,93.117l128-25.6v71.366l-128,25.6Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-newspaper" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M88,72V388a20,20,0,0,1-40,0V152H16V388a52.059,52.059,0,0,0,52,52H444a52.059,52.059,0,0,0,52-52V72ZM464,388a20.023,20.023,0,0,1-20,20H116a51.722,51.722,0,0,0,4-20V104H464Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M296,136H152V296H296ZM264,264H184V168h80Z"
          className="ci-primary"
        />
        <rect
          width="104"
          height="32"
          x="328"
          y="136"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="104"
          height="32"
          x="328"
          y="200"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="104"
          height="32"
          x="328"
          y="264"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-note-add" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M24,24V496H318.627L496,318.627V24ZM56,56H464V272H272V464H56ZM305.373,464H304V304H464v1.373Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="208 288 208 208 288 208 288 176 208 176 208 96 176 96 176 176 96 176 96 208 176 208 176 288 208 288"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-notes" viewBox="0 0 512 512">
        <rect
          width="288"
          height="32"
          x="112"
          y="152"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="288"
          height="32"
          x="112"
          y="240"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="152"
          height="32"
          x="112"
          y="328"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M480,48H32V464H480ZM448,432H64V80H448Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-object-group" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M304,136H128V288h80v88H384V224H304ZM160,256V168H272v88H160Zm192,0v88H240V288h64V256Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M400,48H112V16H16v96H48V400H16v96h96V464H400v32h96V400H464V112h32V16H400ZM48,48H80V80H48ZM80,464H48V432H80Zm384,0H432V432h32ZM432,48h32V80H432Zm0,352H400v32H112V400H80V112h32V80H400v32h32Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-object-ungroup" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M400,168H328V112h32V16H264V48H112V16H16v96H48V264H16v96h96V328h72v72H152v96h96V464H400v32h96V400H464V232h32V136H400ZM296,48h32V80H296Zm32,248v32H296V296ZM48,48H80V80H48ZM80,328H48V296H80Zm32-32V264H80V112h32V80H264v32h32V264H264v32ZM216,464H184V432h32Zm248,0H432V432h32ZM432,168h32v32H432Zm0,232H400v32H248V400H216V328h48v32h96V264H328V200h72v32h32Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-opacity" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M285.177,179l15.513-3.914-7.827-31.028-15.514,3.913a176.937,176.937,0,0,0-129.3,133.557l-3.407,15.633,31.266,6.814,3.406-15.634A145.559,145.559,0,0,1,285.177,179Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M363.624,147.871C343.733,72.077,274.643,16,192.7,16,95.266,16,16,95.266,16,192.7c0,82.617,57,152.163,133.735,171.4A176.769,176.769,0,0,0,320.7,496c97.431,0,176.7-79.266,176.7-176.695C497.392,238.071,441.64,167.336,363.624,147.871ZM48,192.7C48,112.91,112.91,48,192.7,48s144.7,64.91,144.7,144.7-64.911,144.7-144.7,144.7S48,272.481,48,192.7ZM320.7,464c-60.931,0-115.21-38.854-135.843-94.792,2.6.115,5.214.184,7.843.184a176.862,176.862,0,0,0,32.7-3.047l97.625,97.625C322.247,463.983,321.473,464,320.7,464Zm41.528-6.083L260.26,355.954a176.9,176.9,0,0,0,43.662-26.072L408.37,434.33A144.385,144.385,0,0,1,362.223,457.917Zm69.3-45.692L326.851,307.557a177.082,177.082,0,0,0,27.911-44.5L457.67,365.964A144.661,144.661,0,0,1,431.519,412.225Zm33.594-84.073-99.42-99.42a176.785,176.785,0,0,0,3.7-36.036c0-3.285-.1-6.547-.276-9.787a145.054,145.054,0,0,1,96.276,136.4C465.392,322.276,465.291,325.224,465.113,328.152Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-opentype" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M366.675,94.818a145.972,145.972,0,0,0-60.087-25.88,163.023,163.023,0,0,0-57.469-.117C208.125,75.986,168.68,98.5,138.051,132.2,107.3,166.046,87.266,209.3,81.642,254c-5.678,45.161,3.671,89.074,26.326,123.649,22.767,34.748,57.389,57.982,97.489,65.421a157.665,157.665,0,0,0,28.692,2.61,166.3,166.3,0,0,0,28.684-2.512c24.911-4.332,48.895-14.088,71.281-29,52.347-34.845,88.324-93.23,96.24-156.176,4.15-32.953.333-65.5-11.038-94.134C408.138,135.724,389.935,111.848,366.675,94.818ZM113.392,258c7.808-62.061,48.3-117.877,100.45-144.012a204.61,204.61,0,0,0-19.166,25.174c-20.723,31.884-35.883,72.466-42.685,114.273-6.841,42.054-4.837,83.062,5.643,115.468a140.759,140.759,0,0,0,11.1,25.7C128.277,368.021,106.033,316.532,113.392,258Zm227.3-4.566c-8.56,52.618-31.076,101.106-60.232,129.707-11.193,10.984-22.93,18.378-33.98,21.393a38.951,38.951,0,0,1-21.852.061c-15.612-4.774-28.59-20.946-36.543-45.538-8.946-27.663-10.546-63.35-4.5-100.485,6.1-37.516,19.575-73.73,37.93-101.97,17.192-26.451,37.167-43.9,56.241-49.133a43.3,43.3,0,0,1,11.417-1.6,35.562,35.562,0,0,1,10.467,1.541l.025.007c8.133,2.488,15.537,8.034,22.007,16.485C342.067,150.549,349.357,200.181,340.688,253.431Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-options" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-paint-bucket" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M412.284,294.37l-12.5,15.642c-8.354,10.454-50.027,64.208-50.027,95.883,0,36.451,28.049,66.105,62.526,66.105s62.527-29.654,62.527-66.105c0-31.675-41.673-85.429-50.028-95.883Zm0,145.63c-16.832,0-30.526-15.3-30.526-34.105,0-11.662,15.485-37.883,30.531-59.2,15.043,21.3,30.522,47.509,30.522,59.2C442.811,424.7,429.116,440,412.284,440Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M122.669,51.492,96.133,124.4,30.092,97.205,17.908,126.8l67.271,27.7L26.9,314.606a48.056,48.056,0,0,0,28.689,61.523l184.719,67.232a48,48,0,0,0,61.523-28.688L397.6,151.56Zm149.1,352.236a16,16,0,0,1-20.508,9.563L66.537,346.059a16,16,0,0,1-9.563-20.507L73.553,280H316.8ZM85.2,248l29.594-81.311,36.333,14.961a32.644,32.644,0,1,0,11.236-29.98l-36.615-15.077,16.046-44.085,214.79,78.177L328,249.219V248Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-paint" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M418.968,215.116A71.976,71.976,0,0,0,408.023,72H384V40a24.028,24.028,0,0,0-24-24H72A24.028,24.028,0,0,0,48,40V144a24.028,24.028,0,0,0,24,24H360a24.028,24.028,0,0,0,24-24V104h24.023a39.977,39.977,0,0,1,6.079,79.489L240,210.273V280H184V496H328V280H272V237.727ZM352,136H80V48H352ZM296,312V464H216V312Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-paper-plane" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M474.444,19.857a20.336,20.336,0,0,0-21.592-2.781L33.737,213.8v38.066l176.037,70.414L322.69,496h38.074l120.3-455.4A20.342,20.342,0,0,0,474.444,19.857ZM337.257,459.693,240.2,310.37,389.553,146.788l-23.631-21.576L215.4,290.069,70.257,232.012,443.7,56.72Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-paperclip" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M153.456,472A136,136,0,0,1,57.289,239.834l196.6-196.6L276.52,65.857l-196.6,196.6A104,104,0,0,0,227,409.539L434.912,201.622A72,72,0,0,0,333.088,99.8L125.171,307.716a40,40,0,1,0,56.568,56.568L361.373,184.652,384,207.279,204.367,386.911A72,72,0,1,1,102.544,285.089L310.461,77.172A104,104,0,1,1,457.539,224.249L249.622,432.166A135.1,135.1,0,0,1,153.456,472Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-paragraph" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M440,64H208a128,128,0,0,0,0,256h56V448H376V96h64ZM264,288H208a96,96,0,0,1,0-192h56Zm80,128H296V96h48Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-paw" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M382.825,304.576a131.562,131.562,0,0,0-253.65,0l-18.248,66.15A80,80,0,0,0,188.046,472H323.954a80,80,0,0,0,77.119-101.274Zm-20.682,116.5A47.638,47.638,0,0,1,323.954,440H188.046a48,48,0,0,1-46.272-60.765l18.248-66.149a99.563,99.563,0,0,1,191.956,0l18.248,66.149A47.636,47.636,0,0,1,362.143,421.08Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M146.1,230.31c2.784-17.4-.908-36.027-10.4-52.463S111.92,148.9,95.463,142.611c-17.624-6.731-35.6-5.659-50.634,3.017C14.942,162.884,7.077,205.413,27.3,240.433c9.489,16.436,23.778,28.95,40.235,35.236a64.058,64.058,0,0,0,22.863,4.371,55.133,55.133,0,0,0,27.771-7.389C133.194,263.974,143.114,248.937,146.1,230.31Zm-31.6-5.058c-1.43,8.929-5.81,15.92-12.333,19.686S87.4,249,78.95,245.775c-9.613-3.671-18.115-11.251-23.941-21.342-11.2-19.4-8.538-42.8,5.82-51.092a23.483,23.483,0,0,1,11.847-3.058A31.951,31.951,0,0,1,84.044,172.5c9.613,3.673,18.115,11.252,23.941,21.343S116.124,215.091,114.5,225.252Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M149.566,164.017c11.362,9.083,24.337,13.813,37.458,13.812a54.965,54.965,0,0,0,11.689-1.261c33.723-7.331,54.17-45.443,45.58-84.958h0c-4.03-18.546-13.828-34.817-27.588-45.818-14.735-11.78-32.189-16.239-49.147-12.551-33.722,7.33-54.169,45.442-45.58,84.957C126.009,136.745,135.807,153.016,149.566,164.017Zm24.788-99.506a22.258,22.258,0,0,1,4.732-.5c5.948,0,12.066,2.327,17.637,6.781,8.037,6.425,13.826,16.234,16.3,27.621h0c4.76,21.895-4.906,43.368-21.107,46.89-7.361,1.6-15.305-.628-22.367-6.275-8.037-6.426-13.826-16.235-16.3-27.621C148.488,89.506,158.154,68.033,174.354,64.511Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M467.171,145.628c-15.028-8.676-33.013-9.748-50.634-3.017-16.457,6.287-30.746,18.8-40.235,35.236s-13.182,35.067-10.4,52.463c2.982,18.627,12.9,33.664,27.931,42.341a55.123,55.123,0,0,0,27.771,7.389,64.054,64.054,0,0,0,22.863-4.371c16.457-6.286,30.746-18.8,40.235-35.236C504.923,205.413,497.058,162.884,467.171,145.628Zm-10.18,78.805c-5.826,10.091-14.328,17.671-23.941,21.342-8.446,3.228-16.692,2.931-23.215-.837s-10.9-10.757-12.333-19.686c-1.626-10.161.686-21.314,6.513-31.4s14.328-17.67,23.941-21.343a31.955,31.955,0,0,1,11.368-2.221,23.483,23.483,0,0,1,11.847,3.058C465.529,181.631,468.194,205.028,456.991,224.433Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M313.287,176.568a54.965,54.965,0,0,0,11.689,1.261c13.12,0,26.1-4.729,37.458-13.812,13.759-11,23.557-27.272,27.588-45.818,8.589-39.515-11.858-77.627-45.58-84.957-16.957-3.686-34.412.77-49.147,12.551-13.76,11-23.558,27.272-27.588,45.817C259.117,131.125,279.564,169.237,313.287,176.568Zm-14.31-78.16h0c2.474-11.387,8.263-21.2,16.3-27.621,5.572-4.454,11.689-6.781,17.637-6.781a22.258,22.258,0,0,1,4.732.5c16.2,3.522,25.866,25,21.107,46.89-2.476,11.387-8.265,21.2-16.3,27.622-7.061,5.646-15,7.874-22.367,6.275C303.883,141.776,294.217,120.3,298.977,98.408Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-pen-alt" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M23.686,456.521a24.841,24.841,0,0,0,6,25.708l.087.087a24.841,24.841,0,0,0,17.612,7.342,25.179,25.179,0,0,0,8.1-1.344h0a646.28,646.28,0,0,0,248.04-154.207L469.981,167.646A88.832,88.832,0,1,0,344.354,42.019l-9.534,9.534L314.029,30.762a50.4,50.4,0,0,0-71.274,0L108.687,164.83l22.626,22.627L265.382,53.389a18.4,18.4,0,0,1,26.019,0L312.193,74.18l-134.3,134.3A646.28,646.28,0,0,0,23.686,456.521Zm343.3-391.875a56.832,56.832,0,1,1,80.373,80.373l-89.493,89.493-80.372-80.373ZM254.862,176.766l80.372,80.372L280.892,311.48A614.383,614.383,0,0,1,58.779,453.221,614.383,614.383,0,0,1,200.52,231.108Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-pen-nib" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M487.97,155.853a24.035,24.035,0,0,0-7-18.166L376.126,32.842a24,24,0,0,0-35.546,1.772L250.644,144.536,120.507,171.05a27.1,27.1,0,0,0-20.025,17.026L17.883,405.84a27.268,27.268,0,0,0,6.205,28.917l53.271,53.271a27.263,27.263,0,0,0,28.915,6.207L324.134,411.6a27.144,27.144,0,0,0,16.95-19.655l28.1-128.7L479.2,173.232A24.041,24.041,0,0,0,487.97,155.853Zm-177.6,226.741L97.807,463.222,84.665,450.079l99.36-99.36a56.061,56.061,0,1,0-22.268-22.986l-99.72,99.72L48.894,414.31,129.47,201.881l124.717-25.41,83.052,83.051ZM187.42,301.9a24,24,0,1,1,24,24A24,24,0,0,1,187.42,301.9Zm168.391-69.065L280.973,158,359.749,61.72l92.343,92.343Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-pen" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M345.994,42.019,179.531,208.481A646.3,646.3,0,0,0,25.325,456.521a24.845,24.845,0,0,0,6,25.708l.087.087a24.84,24.84,0,0,0,17.611,7.342,25.172,25.172,0,0,0,8.1-1.344,646.283,646.283,0,0,0,248.04-154.207L471.62,167.646A88.831,88.831,0,0,0,345.994,42.019ZM282.531,311.48A614.445,614.445,0,0,1,60.419,453.221,614.435,614.435,0,0,1,202.158,231.108l99.162-99.161,80.372,80.372ZM448.993,145.019l-44.674,44.673L323.947,109.32l44.674-44.674a56.832,56.832,0,1,1,80.372,80.373Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-pencil" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M29.663,482.25l.087.087a24.847,24.847,0,0,0,17.612,7.342,25.178,25.178,0,0,0,8.1-1.345l142.006-48.172,272.5-272.5A88.832,88.832,0,0,0,344.334,42.039l-272.5,272.5L23.666,456.541A24.844,24.844,0,0,0,29.663,482.25Zm337.3-417.584a56.832,56.832,0,0,1,80.371,80.373L411.5,180.873,331.127,100.5ZM99.744,331.884,308.5,123.127,388.873,203.5,180.116,412.256,58.482,453.518Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-people" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M462.541,316.3l-64.344-42.1,24.774-45.418A79.124,79.124,0,0,0,432.093,192V120A103.941,103.941,0,0,0,257.484,43.523L279.232,67a71.989,71.989,0,0,1,120.861,53v72a46.809,46.809,0,0,1-5.215,21.452L355.962,284.8l89.058,58.274a42.16,42.16,0,0,1,19.073,35.421V432h-72v32h104V378.494A74.061,74.061,0,0,0,462.541,316.3Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M318.541,348.3l-64.343-42.1,24.773-45.418A79.124,79.124,0,0,0,288.093,224V152A104.212,104.212,0,0,0,184.04,47.866C126.723,47.866,80.093,94.581,80.093,152v72a78,78,0,0,0,9.015,36.775l24.908,45.664L50.047,348.3A74.022,74.022,0,0,0,16.5,410.4L16,496H352.093V410.494A74.061,74.061,0,0,0,318.541,348.3ZM320.093,464H48.186l.31-53.506a42.158,42.158,0,0,1,19.073-35.421l88.682-58.029L117.2,245.452A46.838,46.838,0,0,1,112.093,224V152a72,72,0,1,1,144,0v72a46.809,46.809,0,0,1-5.215,21.452L211.962,316.8l89.058,58.274a42.16,42.16,0,0,1,19.073,35.421Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-phone" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-pin" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M477.8,140.2l-106-106a62.132,62.132,0,0,0-93.617,81.24l-4.913,5.533-97.654,42.9-42.611-23.026a24.038,24.038,0,0,0-28.86,4.638L62.6,189.487a23.881,23.881,0,0,0,.479,33.449l101.68,101.679L16,473.373V496H38.627L187.385,347.242,288.6,448.457a23.928,23.928,0,0,0,33.275.642L366.3,407.971a23.978,23.978,0,0,0,4.773-29.092l-23.344-42.858,42.131-90.515,8.6-10.318A62.134,62.134,0,0,0,477.8,140.2Zm-22.628,65.231a30.125,30.125,0,0,1-42.6,0l-16.885-16.886-33.08,39.678-50.7,108.933,28.087,51.566-34.209,31.669L91.2,205.806l32-33.89,50.969,27.543,118.386-52.008,29.177-32.863L306.574,99.427h0a30.126,30.126,0,0,1,42.6-42.6l106,106a30.126,30.126,0,0,1,0,42.6Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-pizza" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M468.285,106.1c-73.4-48.951-142.775-73.181-212.079-74.076C186.026,31.159,116.8,52.721,44.54,98.055a31.842,31.842,0,0,0-10.572,43.3L228.554,472.874A31.724,31.724,0,0,0,256,488.676h.16a31.722,31.722,0,0,0,27.434-15.537L477.96,149.191A31.959,31.959,0,0,0,468.285,106.1Zm-17.764,26.624L256.151,456.676,61.547,125.162C127.108,84.028,189.454,64,252.007,64q1.893,0,3.787.024c62.934.812,126.633,23.285,194.737,68.7Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M223.576,231.487A27.731,27.731,0,1,0,201.069,263.6,27.731,27.731,0,0,0,223.576,231.487Z"
          className="ci-primary"
        />
        <circle
          cx="307.735"
          cy="283.762"
          r="27.731"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
          transform="rotate(-40.627 307.731 283.76)"
        />
        <rect
          width="32.001"
          height="62.482"
          x="232"
          y="316.785"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
          transform="rotate(-50.194 248.003 348.028)"
        />
        <rect
          width="68.352"
          height="32"
          x="253.824"
          y="180.026"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
          transform="rotate(-20.556 288.002 196.026)"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M120.5,181.58c33.288-20.885,84.546-45.571,140.818-45.571q1.234,0,2.473.016c46.876.6,89.878,15,135.329,45.313l17.754-26.623c-50.825-33.893-99.337-50-152.671-50.688C199.151,103.222,140.915,131,103.5,154.473Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-plant" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M389.053,126.3A302.909,302.909,0,0,0,280.012,18.15L272,13.516l-8.012,4.634A301.084,301.084,0,0,0,113.4,279.042c0,3.445.06,6.944.177,10.4,1.592,46.856,19.511,86.283,51.82,114.018,24.724,21.225,56.438,34.182,90.607,37.273V496h32V240H256V408.528c-54.064-6.263-107.873-44.455-110.444-120.174-.106-3.095-.16-6.228-.16-9.312A270.286,270.286,0,0,1,272,50.673,270.286,270.286,0,0,1,398.6,279.042c0,3.084-.054,6.217-.16,9.313-2.056,60.573-36.907,97.127-78.444,112.536v33.867a156.188,156.188,0,0,0,58.607-31.3c32.309-27.735,50.228-67.162,51.82-114.017.117-3.456.177-6.955.177-10.4A300.948,300.948,0,0,0,389.053,126.3Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-playlist-add" viewBox="0 0 512 512">
        <rect
          width="208"
          height="32"
          x="256"
          y="152"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="288"
          height="32"
          x="176"
          y="256"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="288"
          height="32"
          x="176"
          y="360"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="192 152 128 152 128 88 96 88 96 152 32 152 32 184 96 184 96 248 128 248 128 184 192 184 192 152"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-plus" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="440 240 272 240 272 72 240 72 240 240 72 240 72 272 240 272 240 440 272 440 272 272 440 272 440 240"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-pool" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M468.479,361.5c-9.072-4.233-20.361-9.5-41.054-9.5s-31.983,5.268-41.053,9.5c-7.782,3.631-13.928,6.5-27.523,6.5s-19.739-2.868-27.52-6.5c-9.071-4.232-20.359-9.5-41.052-9.5s-31.981,5.269-41.051,9.5c-7.781,3.631-13.926,6.5-27.519,6.5s-19.737-2.868-27.517-6.5c-9.07-4.232-20.358-9.5-41.05-9.5s-31.981,5.269-41.051,9.5c-7.781,3.631-13.926,6.5-27.519,6.5s-19.738-2.868-27.519-6.5C47.981,357.269,36.692,352,16,352v32c13.593,0,19.738,2.868,27.519,6.5,9.07,4.232,20.359,9.5,41.051,9.5s31.981-5.269,41.051-9.5c7.781-3.631,13.926-6.5,27.519-6.5s19.737,2.868,27.517,6.5c9.07,4.232,20.358,9.5,41.05,9.5s31.981-5.269,41.051-9.5c7.781-3.631,13.927-6.5,27.519-6.5s19.739,2.868,27.52,6.5c9.071,4.232,20.359,9.5,41.052,9.5s31.983-5.268,41.054-9.5c7.781-3.631,13.928-6.5,27.522-6.5s19.741,2.868,27.521,6.5c9.072,4.233,20.361,9.5,41.054,9.5V368C482.406,368,476.259,365.132,468.479,361.5Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M427.425,448c-20.693,0-31.983,5.268-41.053,9.5-7.782,3.631-13.928,6.5-27.523,6.5s-19.739-2.868-27.52-6.5c-9.071-4.232-20.359-9.5-41.052-9.5s-31.981,5.269-41.051,9.5c-7.781,3.631-13.926,6.5-27.519,6.5s-19.737-2.868-27.517-6.5c-9.07-4.232-20.358-9.5-41.05-9.5s-31.981,5.269-41.051,9.5c-7.781,3.631-13.926,6.5-27.519,6.5s-19.738-2.868-27.519-6.5C47.981,453.269,36.692,448,16,448v32c13.593,0,19.738,2.868,27.519,6.5,9.07,4.232,20.359,9.5,41.051,9.5s31.981-5.269,41.051-9.5c7.781-3.631,13.926-6.5,27.519-6.5s19.737,2.868,27.517,6.5c9.07,4.232,20.358,9.5,41.05,9.5s31.981-5.269,41.051-9.5c7.781-3.631,13.927-6.5,27.519-6.5s19.739,2.868,27.52,6.5c9.071,4.232,20.359,9.5,41.052,9.5s31.983-5.268,41.054-9.5c7.781-3.631,13.928-6.5,27.522-6.5s19.741,2.868,27.521,6.5c9.072,4.233,20.361,9.5,41.054,9.5V464c-13.594,0-19.741-2.868-27.521-6.5C459.407,453.268,448.118,448,427.425,448Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M248,272H392v56h32V115.878a47.8,47.8,0,0,1,8.446-27.193L482.417,16H443.583L406.076,70.556A79.67,79.67,0,0,0,392,115.878V160H248V115.878a47.8,47.8,0,0,1,8.446-27.193L306.417,16H267.583L230.076,70.556A79.67,79.67,0,0,0,216,115.878V328h32Zm0-80H392v48H248Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-power-standby" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M312,87.666v33.47C381.676,144.582,432,210.522,432,288c0,97.047-78.953,176-176,176S80,385.047,80,288c0-77.478,50.324-143.418,120-166.864V87.666C112.422,112.179,48,192.7,48,288c0,114.691,93.309,208,208,208s208-93.309,208-208C464,192.7,399.578,112.179,312,87.666Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="272"
          x="240"
          y="16"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-pregnant" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M224,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,224,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,224,48Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M353.959,251.37c-15.021-16.9-35.063-27.659-62.61-33.506L266.551,160H178.123L152,342.863V400h56v96h96V400h80V352C384,307.028,374.174,274.112,353.959,251.37ZM352,368H272v96H240V368H184V345.137L205.877,192h39.572l23.291,54.344,8.629,1.438c24.5,4.083,41.233,11.979,52.672,24.848C344.817,289.253,352,315.215,352,352Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-print" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M420,128.1V16H92V128.1A80.1,80.1,0,0,0,16,208V400H84V368H48V208a48.054,48.054,0,0,1,48-48H416a48.054,48.054,0,0,1,48,48V368H420v32h76V208A80.1,80.1,0,0,0,420,128.1Zm-32-.1H124V48H388Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="396"
          y="200"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M116,264H76v32h40V496H388V296h40V264H116ZM356,464H148V296H356Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-pushchair" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M445.057,345.134,464,274.1V232c-8.136-93.993-87.933-168-184-168H248V232H132.158l-17.844-78.768A32.155,32.155,0,0,0,83.038,128H16v32H83.038l40.475,178.67A80,80,0,1,0,224,416q0-4.05-.4-8H328.4q-.395,3.948-.4,8a80,80,0,1,0,117.057-70.866ZM280,96c78.411,0,143.145,59.678,151.164,136H280ZM144,464a48,48,0,1,1,48-48A48.055,48.055,0,0,1,144,464Zm194.763-88H213.237a80.166,80.166,0,0,0-57.316-39.108L139.408,264H432v5.9l-17.7,66.368c-2.082-.163-4.179-.271-6.3-.271A80.026,80.026,0,0,0,338.763,376ZM408,464a48,48,0,1,1,48-48A48.055,48.055,0,0,1,408,464Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-puzzle" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M491.693,256.705l-54.957-49.461,16.407-13.406a80.491,80.491,0,0,0,18.363-21.522c18.148-31.441,12.867-70.042-13.144-96.052S393.75,44.973,362.311,63.122a80.513,80.513,0,0,0-21.52,18.362L327.383,97.891,277.922,42.935l-.579-.611a24.028,24.028,0,0,0-33.941,0l-65.6,65.605,1.19,23.7L212.1,158.685a48.6,48.6,0,0,1,11.079,12.889c10.807,18.722,7.57,41.8-8.056,57.426s-38.7,18.862-57.426,8.058a48.66,48.66,0,0,1-12.9-11.086l-27.047-33.1-23.7-1.189-71.26,71.26a24,24,0,0,0,0,33.942L198.147,472.244a80,80,0,0,0,113.138,0L492.3,291.225a24.029,24.029,0,0,0,0-33.94ZM288.657,449.617a48,48,0,0,1-67.883,0L51.069,279.911l53.1-53.095,15.91,19.473.1.119a80.487,80.487,0,0,0,21.521,18.363c31.441,18.149,70.041,12.867,96.052-13.144s31.291-64.61,13.143-96.05a80.482,80.482,0,0,0-18.363-21.521l-19.591-16.01,47.124-47.124,56.018,62.241,24.282-.579,25.062-30.67a48.611,48.611,0,0,1,12.888-11.078c18.722-10.807,41.8-7.569,57.426,8.056s18.864,38.7,8.057,57.426a48.591,48.591,0,0,1-11.079,12.889l-30.67,25.061-.58,24.282,62.243,56.018Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-qr-code" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="48 48 176 48 176 16 16 16 16 176 48 176 48 48"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M176,176V80H80v96h96Zm-64-64h32v32H112Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="328 48 464 48 464 176 496 176 496 16 328 16 328 48"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M432,176V80H336v96h96Zm-64-64h32v32H368Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="176 464 48 464 48 336 16 336 16 496 176 496 176 464"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M176,336H80v96h96V336Zm-32,64H112V368h32Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="464 464 328 464 328 496 496 496 496 336 464 336 464 464"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="272 304 400 304 400 368 432 368 432 272 272 272 272 304"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="432 432 432 400 240 400 240 272 80 272 80 304 208 304 208 432 432 432"
          className="ci-primary"
        />
        <rect
          width="32"
          height="96"
          x="208"
          y="80"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="80 240 304 240 304 80 272 80 272 208 80 208 80 240"
          className="ci-primary"
        />
        <rect
          width="96"
          height="32"
          x="336"
          y="208"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="336"
          y="336"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="272"
          y="336"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-rain" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M398.2,137.208a144.013,144.013,0,0,0-284.545.979,122.364,122.364,0,0,0-64.357,32.926A109.4,109.4,0,0,0,16,249.619c0,31.119,12.789,60.762,36.01,83.469q2.84,2.776,5.845,5.347l11.327-33.981C56.091,289.3,48,270.017,48,249.619c0-42.362,35.724-78.015,81.329-81.168l14.055-.972.814-14.065a111.995,111.995,0,0,1,223.589-.22l.891,14.888,14.913.155c46.592.488,80.409,34.714,80.409,81.382,0,33.152-16.706,61.38-41.84,75.9L409.032,364.9a110.012,110.012,0,0,0,54.938-32.358C484.625,310.339,496,280.889,496,249.619,496,190.507,454.859,144.4,398.2,137.208Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="126.029 496 159.817 496 223.153 309.136 192.847 298.864 126.029 496"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="294.029 496 327.817 496 391.153 309.136 360.847 298.864 294.029 496"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="290.11 251.033 225.781 448 259.445 448 320.529 260.967 290.11 251.033"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="128.791 251.033 64.461 448 98.125 448 159.209 260.967 128.791 251.033"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-rectangle" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M36,416H476a20.023,20.023,0,0,0,20-20V116a20.023,20.023,0,0,0-20-20H36a20.023,20.023,0,0,0-20,20V396A20.023,20.023,0,0,0,36,416ZM48,128H464V384H48Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-recycle" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M68.328,383.063a31.654,31.654,0,0,1,.207-32.118l50.883-86.406,11.516,50.76,31.207-7.08L138.257,202.944,32.983,226.828l7.08,31.207,53.149-12.058L40.96,334.707a64,64,0,0,0,55.149,96.476h82.435l32-32H96.109A31.655,31.655,0,0,1,68.328,383.063Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M283.379,79.762l53.747,91.268-49.053-7.653-4.934,31.617L389.8,211.635l16.64-106.66-31.617-4.933-8.873,56.87L310.954,63.524a64,64,0,0,0-110.3,0l-39.939,67.82,10.407,45.39,57.106-96.972a32,32,0,0,1,55.148,0Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M470.65,334.707l-47.867-81.283-41.148-6.812,61.441,104.333A32,32,0,0,1,415.5,399.183H304.046l38.359-38.358L319.778,338.2l-76.332,76.332,76.332,76.333,22.627-22.628-37.052-37.051H415.5a64,64,0,0,0,55.149-96.476Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-reload" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M265.614,206.387H456V16H424V149.887L397.863,123.75c-79.539-79.539-208.96-79.54-288.5,0s-79.539,208.96,0,288.5a204.232,204.232,0,0,0,288.5,0l-22.627-22.627c-67.063,67.063-176.182,67.063-243.244,0s-67.063-176.183,0-243.246,176.182-67.063,243.245,0l28.01,28.01H265.614Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-report-slash" viewBox="0 0 512 512">
        <rect
          width="32"
          height="32"
          x="240"
          y="352"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="355.411 16 156.589 16 121.653 53.771 144.298 76.416 170.58 48 341.42 48 464 180.53 464 331.47 432.937 365.055 455.581 387.7 496 344 496 168 355.411 16"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="240 128 240 172.118 272 204.118 272 128 240 128"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M16,16V38.627l62.164,62.164L16,168V344L156.589,496H355.411l56.681-61.281L473.373,496H496V473.373L38.627,16ZM341.42,464H170.58L48,331.47V180.53l52.808-57.095L240,262.627V320h32V294.627L389.447,412.074Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-resize-both" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M404.687,212.686l-50.51,50.51L248.805,157.823l50.841-50.843L272.666,80H80V272l27.313,27.314,50.982-50.981L263.667,353.706l-51.313,51.313L239.333,432H432V240ZM400,400H262.627l46.3-46.294L158.295,203.078,112,249.373V112H249.373L203.55,157.823,354.177,308.451,400,262.627Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-resize-height" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256.236,504,120,367.764V329.608h72v-144H120V146.98L255.766,11.216,392,147.452v38.156H320v144h72v38.627ZM159.1,361.608l97.137,97.137,97.137-97.137H288v-208h64.9L255.766,56.471l-97.138,97.137H224v208Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-resize-width" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M366.156,392H328V320H184v72H145.373L9.607,256.235,145.845,120H184v72H328V120h38.627L502.393,255.765ZM54.863,256.235,152,353.373V288H360v64.9l97.137-97.137L360,158.627V224H152V159.1Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-restaurant" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M224,160H176V48H144V160H96V48H64V172c0,45.505,34.655,83.393,80,90.715V472h32V262.715c45.345-7.322,80-45.21,80-90.715V48H224Zm-64,72c-27.811,0-51.524-16.722-60.33-40H220.33C211.524,215.278,187.811,232,160,232Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M413.567,40.187A138.648,138.648,0,0,0,296,177.224V344H400V472h32V37.351ZM400,312H328V177.224A105.986,105.986,0,0,1,400,76.313Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-room" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="64"
          x="256"
          y="232"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-router" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M443.057,132.943l22.634-22.634a143.764,143.764,0,0,0-211.382,0l22.634,22.634a111.838,111.838,0,0,1,166.114,0Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M299.615,155.615l22.7,22.7a47.913,47.913,0,0,1,75.362,0l22.7-22.7a79.829,79.829,0,0,0-120.77,0Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M472,280H376V216H344v64H40a24.028,24.028,0,0,0-24,24V416a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V304A24.028,24.028,0,0,0,472,280Zm-8,128H48V312H464Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="96"
          y="344"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="176"
          y="344"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="256"
          y="344"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-rowing" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M302.569,106.243A36,36,0,1,0,286.088,76,35.825,35.825,0,0,0,302.569,106.243Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M419.9,396.687,381.412,358.2l-11.375-11.375-74.621-19.515L188.173,216h59.9L288,161.935V279.762L320.079,313.3,352,319.683V131.314H270.833L231.926,184H157.342l-33.82-35.1-23.044,22.2L213.355,288.258,85.694,395.762l.779.925H16v32H248v-32H134.274l101.333-85.334,34.619,35.931,20.617,78.738,59.634,59.633a24,24,0,0,0,33.942,0L429.674,440.4c.034-.033.067-.066.1-.1a38.176,38.176,0,0,1,27.092-11.614H496v-32Zm-52.451,60.685L319.6,409.526l-12.036-45.963,45.979,12.025,47.844,47.844Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-rss" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M66,256v32c88.225,0,160,71.776,160,160h32C258,342.131,171.869,256,66,256Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M66,140v32c152.187,0,276,123.813,276,276h32a305.982,305.982,0,0,0-90.211-217.789A305.987,305.987,0,0,0,66,140Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M456.674,282.955a422.588,422.588,0,0,0-90.861-134.768A422.724,422.724,0,0,0,66,24V56c216.149,0,392,175.851,392,392h32A421.378,421.378,0,0,0,456.674,282.955Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M90,360a64,64,0,1,0,64,64A64.072,64.072,0,0,0,90,360Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,90,456Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-ruble" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M291.75,308.1a105.8,105.8,0,1,0,0-211.6H136v32h39.943V276.1H136v32h39.943V352H136v32h39.943v56h32V384H304V352H207.943V308.1ZM207.943,128.5H291.75a73.8,73.8,0,1,1,0,147.6H207.943Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-running" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M353.415,200l-30.981-57.855-60.717-20.239-.14.432L167.21,149.3A32.133,32.133,0,0,0,144,180.068V264h32V180.069l73.6-21.028-32.512,99.633-.155-.056-29.464,82.5a16.088,16.088,0,0,1-20.127,9.8L101.06,328.821,90.94,359.179l66.282,22.093A48,48,0,0,0,217.6,351.881l24.232-67.849,17.173,5.6,48.3,48.3A15.9,15.9,0,0,1,312,349.255V456h32V349.255a47.694,47.694,0,0,0-14.059-33.942l-48.265-48.264,26.783-82.077,19.269,34.683A24.011,24.011,0,0,0,348.707,232H432V200Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M286.828,109.707a36,36,0,1,0-12.916-27.619A35.851,35.851,0,0,0,286.828,109.707Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-sad" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
          className="ci-primary"
        />
        <rect
          width="40"
          height="40"
          x="152"
          y="200"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="40"
          height="40"
          x="320"
          y="200"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,288a88.1,88.1,0,0,0-88,88h32a56,56,0,0,1,112,0h32A88.1,88.1,0,0,0,256,288Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-satelite" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M16,496H496V16H16Zm448-32H438.627l-104-104,54.912-54.911L464,379.55ZM48,48H464V334.3l-74.461-74.461L312,337.373l-112-112-152,152Zm0,374.627,152-152L393.373,464H48Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M120,80H80v40A40,40,0,0,0,120,80Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M80,163.661V196.6A152.468,152.468,0,0,0,196.6,80H163.661A120.471,120.471,0,0,1,80,163.661Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-save" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M472.971,122.344,373.656,23.029A23.838,23.838,0,0,0,356.687,16H56A24.028,24.028,0,0,0,32,40V472a24.028,24.028,0,0,0,24,24H456a24.028,24.028,0,0,0,24-24V139.313A23.838,23.838,0,0,0,472.971,122.344ZM320,48v96H176V48ZM448,464H64V48h80V176H352V48h1.373L448,142.627Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M252,224a92,92,0,1,0,92,92A92.1,92.1,0,0,0,252,224Zm0,152a60,60,0,1,1,60-60A60.068,60.068,0,0,1,252,376Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-school" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="368 350.643 256 413.643 144 350.643 144 284.081 112 266.303 112 369.357 256 450.357 400 369.357 400 266.303 368 284.081 368 350.643"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,45.977,32,162.125v27.734L256,314.3,448,207.637V296h32V162.125ZM416,188.808l-32,17.777L256,277.7,128,206.585,96,188.808,73.821,176.486,256,82.023l182.179,94.463Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-screen-desktop" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M40,392H240v72H160v32H352V464H272V392H472a24.028,24.028,0,0,0,24-24V72a24.028,24.028,0,0,0-24-24H40A24.028,24.028,0,0,0,16,72V368A24.028,24.028,0,0,0,40,392ZM48,80H464V360H48Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-screen-smartphone" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M104,48V464a32.036,32.036,0,0,0,32,32H384a32.036,32.036,0,0,0,32-32V48a32.036,32.036,0,0,0-32-32H136A32.036,32.036,0,0,0,104,48ZM384.021,464H136V48H384Z"
          className="ci-primary"
        />
        <rect
          width="96"
          height="32"
          x="216"
          y="80"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="248"
          y="392"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-scrubber" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M425.856,87.379A239.364,239.364,0,1,0,87.344,425.892,239.364,239.364,0,1,0,425.856,87.379ZM256.6,464C142.259,464,49.235,370.977,49.235,256.635S142.259,49.271,256.6,49.271s207.364,93.023,207.364,207.364S370.941,464,256.6,464Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256.6,192.635a64,64,0,1,0,64,64A64.073,64.073,0,0,0,256.6,192.635Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256.6,288.635Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-search" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-send" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M474.444,19.857a20.336,20.336,0,0,0-21.592-2.781L33.737,213.8v38.066l176.037,70.414L322.69,496h38.074l120.3-455.4A20.342,20.342,0,0,0,474.444,19.857ZM337.257,459.693,240.2,310.37,389.553,146.788l-23.631-21.576L215.4,290.069,70.257,232.012,443.7,56.72Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-settings" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M245.151,168a88,88,0,1,0,88,88A88.1,88.1,0,0,0,245.151,168Zm0,144a56,56,0,1,1,56-56A56.063,56.063,0,0,1,245.151,312Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M464.7,322.319l-31.77-26.153a193.081,193.081,0,0,0,0-80.332l31.77-26.153a19.941,19.941,0,0,0,4.606-25.439l-32.612-56.483a19.936,19.936,0,0,0-24.337-8.73l-38.561,14.447a192.038,192.038,0,0,0-69.54-40.192L297.49,32.713A19.936,19.936,0,0,0,277.762,16H212.54a19.937,19.937,0,0,0-19.728,16.712L186.05,73.284a192.03,192.03,0,0,0-69.54,40.192L77.945,99.027a19.937,19.937,0,0,0-24.334,8.731L21,164.245a19.94,19.94,0,0,0,4.61,25.438l31.767,26.151a193.081,193.081,0,0,0,0,80.332l-31.77,26.153A19.942,19.942,0,0,0,21,347.758l32.612,56.483a19.937,19.937,0,0,0,24.337,8.73l38.562-14.447a192.03,192.03,0,0,0,69.54,40.192l6.762,40.571A19.937,19.937,0,0,0,212.54,496h65.222a19.936,19.936,0,0,0,19.728-16.712l6.763-40.572a192.038,192.038,0,0,0,69.54-40.192l38.564,14.449a19.938,19.938,0,0,0,24.334-8.731L469.3,347.755A19.939,19.939,0,0,0,464.7,322.319Zm-50.636,57.12-48.109-18.024-7.285,7.334a159.955,159.955,0,0,1-72.625,41.973l-10,2.636L267.6,464h-44.89l-8.442-50.642-10-2.636a159.955,159.955,0,0,1-72.625-41.973l-7.285-7.334L76.241,379.439,53.8,340.562l39.629-32.624-2.7-9.973a160.9,160.9,0,0,1,0-83.93l2.7-9.972L53.8,171.439l22.446-38.878,48.109,18.024,7.285-7.334a159.955,159.955,0,0,1,72.625-41.973l10-2.636L222.706,48H267.6l8.442,50.642,10,2.636a159.955,159.955,0,0,1,72.625,41.973l7.285,7.334,48.109-18.024,22.447,38.877-39.629,32.625,2.7,9.972a160.9,160.9,0,0,1,0,83.93l-2.7,9.973,39.629,32.623Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-share-all" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M242.918,16.173H200.557v88H152A136.268,136.268,0,0,0,28.025,184.2,114.159,114.159,0,0,0,16,235.506V496.173H68.146l49.606-177.756a85.4,85.4,0,0,1,81.993-62.244h.812v88h41.78l164.29-164.29ZM232.557,308.7V224.173H199.745A117.5,117.5,0,0,0,86.93,309.815L48,449.315V235.506a82.454,82.454,0,0,1,8.785-37.276l.292-.614A104.217,104.217,0,0,1,152,136.173h80.557V51.067L361.373,179.883Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="330.918 15.509 287.509 15.509 451.882 179.883 288.256 343.509 330.337 343.509 494.627 179.219 330.918 15.509"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-share-alt" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M404,344a75.9,75.9,0,0,0-60.208,29.7L179.869,280.664a75.693,75.693,0,0,0,0-49.328L343.792,138.3a75.937,75.937,0,1,0-13.776-28.976L163.3,203.946a76,76,0,1,0,0,104.108l166.717,94.623A75.991,75.991,0,1,0,404,344Zm0-296a44,44,0,1,1-44,44A44.049,44.049,0,0,1,404,48ZM108,300a44,44,0,1,1,44-44A44.049,44.049,0,0,1,108,300ZM404,464a44,44,0,1,1,44-44A44.049,44.049,0,0,1,404,464Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-share-boxed" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="464 248 464 464 48 464 48 48 264 48 264 16 16 16 16 496 496 496 496 216 464 248"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M106.12,171.135A96.274,96.274,0,0,0,96,214.364V430.545h47.782l41.181-147.564a66.953,66.953,0,0,1,64.283-48.8H304V320h38.6L494.627,168.9,342.656,16H304v88H210.182A114.4,114.4,0,0,0,106.12,171.135ZM336,136V54.7L449.373,168.758,336,281.441V202.182H249.246a99.055,99.055,0,0,0-95.105,72.2L128,368.051V214.364a64.576,64.576,0,0,1,6.879-29.2l.292-.614A82.356,82.356,0,0,1,210.182,136Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-share" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M68.146,496H16V235.333a114.169,114.169,0,0,1,12.025-51.309A136.27,136.27,0,0,1,152,104H288.557V16h42.361L494.627,179.71,330.337,344h-41.78V256H199.745a85.4,85.4,0,0,0-81.993,62.244ZM152,136a104.217,104.217,0,0,0-94.923,61.443l-.292.614A82.454,82.454,0,0,0,48,235.333v213.81l38.93-139.5A117.5,117.5,0,0,1,199.745,224H320.557v84.525L449.373,179.71,320.557,50.894V136Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-shield-alt" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M473.605,88.081c-1.352-.137-135.958-14.259-199.218-68.251L269.9,16H242.1l-4.488,3.83C174.464,73.727,39.744,87.944,38.4,88.081L24,89.532V104c0,89.133,14.643,165.443,43.523,226.813,38.105,80.973,100.1,133.669,184.267,156.623l4.21,1.148,4.21-1.148c84.165-22.954,146.162-75.65,184.267-156.623C473.357,269.443,488,193.133,488,104V89.532ZM455.87,118.113q-.237,12.789-.948,25.887H272V57.915C331.921,97.482,421.024,113.237,455.87,118.113ZM272,320H414.266A288.233,288.233,0,0,1,390.9,360H272Zm0-32V248H439.9a402.662,402.662,0,0,1-13.236,42.884V288Zm0-72V176H452.378c-1.4,13.307-3.256,26.682-5.639,40ZM56.13,118.113c34.846-4.876,123.949-20.631,183.87-60.2V450.224C94.012,398.389,58.492,245.387,56.13,118.113ZM272,450.224V392h92.347C340.049,416.7,309.708,436.836,272,450.224Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-short-text" viewBox="0 0 512 512">
        <rect
          width="256"
          height="32"
          x="128"
          y="192"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="128"
          height="32"
          x="128"
          y="304"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M48,432H464V88H48ZM80,120H432V400H80Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-shower" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="240.801 293.826 216.95 317.677 240.75 365.277 264.167 340.559 240.801 293.826"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="255.978 395.732 278.277 440.332 301.695 415.613 279.395 371.014 255.978 395.732"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="438.926 202.62 415.8 227.032 460.223 248.278 483.35 223.866 438.926 202.62"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="342.603 192.024 385.464 212.523 408.591 188.112 366.599 168.028 342.603 192.024"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="307.785 341.046 336.308 379.077 358.633 355.512 330.11 317.481 307.785 341.046"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="310.633 291.512 281.697 252.93 258.84 275.787 288.308 315.077 310.633 291.512"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="300.743 233.884 337.426 263.231 359.511 239.918 323.51 211.117 300.743 233.884"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="362.501 283.291 399.222 312.668 421.307 289.355 384.586 259.979 362.501 283.291"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M348.687,100.687l-26.24,26.239-24.718-24.718a111.609,111.609,0,0,0-157.839,0c-.342.341-.673.689-1.009,1.034A77.974,77.974,0,0,0,16,166.988V408H48V166.988a45.975,45.975,0,0,1,72.048-37.868A111.809,111.809,0,0,0,139.89,260.049l24.717,24.717-23.92,23.921,20,20,208-208ZM185.006,259.911l-22.489-22.489A79.611,79.611,0,0,1,275.1,124.835l22.489,22.49Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-sign-language" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M445.646,241.836V68a8,8,0,0,0-8-8,59.894,59.894,0,0,0-59.9,59.894v41.929l-8.639,8.64-69.928-69.929A22.751,22.751,0,0,0,272.733,96.4l-56.2-56.2a28,28,0,0,0-39.6,0h0a28,28,0,0,0-2.711,36.453v.434L154.306,57.172a28,28,0,0,0-39.6,39.6L137.334,119.4a28,28,0,0,0-39.6,39.6l28.284,28.283a28,28,0,0,0-39.6,0h0a28,28,0,0,0,0,39.6l14.142,14.142,2.553,2.553a42.93,42.93,0,0,0-28.278,40.3V285.9a42.751,42.751,0,0,0,1.524,11.348A42.927,42.927,0,0,0,40,339.619v2.031a42.927,42.927,0,0,0,36.365,42.367,42.751,42.751,0,0,0-1.524,11.348V397.4A42.906,42.906,0,0,0,117.7,440.254H131.98a42.777,42.777,0,0,0-1.392,10.857v2.032A42.905,42.905,0,0,0,173.444,496H322.551l139.672-31.038V256.906ZM430.223,439.292,319.037,464H174.46a11.886,11.886,0,0,1-11.872-11.854v-.038a11.886,11.886,0,0,1,11.872-11.854h90.588v-32H118.714a11.873,11.873,0,1,1,0-23.746H265.048v-32H83.873a11.873,11.873,0,0,1,0-23.746H265.048v-32H117.7A10.87,10.87,0,0,1,106.841,285.9v-2.031A10.869,10.869,0,0,1,117.7,273.016H334.223V224.265l-46.152-46.151a37.778,37.778,0,0,1-4.489-47.926l82.944,82.943.269.27,63.428,57.661Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-signal-cellular-0" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M16,456.78V496H496V16H456.78ZM464,464H54.035L464,54.034Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-signal-cellular-3" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M208.78,264h-.1v.1L16,456.78V496H496V16H456.78Zm-88.1,200H54.035l66.646-66.646Zm88,0h-56V365.354l56-56Zm88,0h-56V277.354l56-56ZM464,464H328.681V189.354L464,54.034Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-signal-cellular-4" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M384.78,88h-.1v.1L208.78,264h-.1v.1L16,456.78V496H496V16H456.78Zm-264.1,376H54.034l66.647-66.646Zm88,0h-56V365.354l56-56Zm88,0h-56V277.354l56-56Zm88,0h-56V189.354l56-56ZM464,464H416.681V101.354L464,54.034Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-sim" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M384,40H230.627A31.791,31.791,0,0,0,208,49.373L97.373,160A31.791,31.791,0,0,0,88,182.627V448a32.036,32.036,0,0,0,32,32H384a32.036,32.036,0,0,0,32-32V72A32.036,32.036,0,0,0,384,40Zm0,408H120V182.627L230.627,72H384Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M208,416H352V216H208Zm32-168h80V384H240Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-sitemap" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M472,328H448V264a24.027,24.027,0,0,0-24-24H272V176h32a24.028,24.028,0,0,0,24-24V80a24.028,24.028,0,0,0-24-24H208a24.028,24.028,0,0,0-24,24v72a24.028,24.028,0,0,0,24,24h32v64H88a24.027,24.027,0,0,0-24,24v64H40a24.028,24.028,0,0,0-24,24v72a24.028,24.028,0,0,0,24,24h80a24.028,24.028,0,0,0,24-24V352a24.028,24.028,0,0,0-24-24H96V272H240v56H216a24.028,24.028,0,0,0-24,24v72a24.028,24.028,0,0,0,24,24h80a24.028,24.028,0,0,0,24-24V352a24.028,24.028,0,0,0-24-24H272V272H416v56H392a24.028,24.028,0,0,0-24,24v72a24.028,24.028,0,0,0,24,24h80a24.028,24.028,0,0,0,24-24V352A24.028,24.028,0,0,0,472,328ZM216,88h80v56H216ZM112,360v56H48V360Zm176,0v56H224V360Zm176,56H400V360h64Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-smile-plus" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="432 80 432 16 400 16 400 80 336 80 336 112 400 112 400 176 432 176 432 112 496 112 496 80 432 80"
          className="ci-primary"
        />
        <rect
          width="40"
          height="40"
          x="112"
          y="256"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="40"
          height="40"
          x="248"
          y="256"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M203.438,384h-6.875a63.691,63.691,0,0,1-59.326-40h-34.47l4.662,11.653A95.541,95.541,0,0,0,196.563,416h6.875a95.54,95.54,0,0,0,89.133-60.347L297.233,344h-34.47A63.691,63.691,0,0,1,203.438,384Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M200,128C98.542,128,16,210.542,16,312S98.542,496,200,496s184-82.542,184-184S301.458,128,200,128Zm0,336c-83.813,0-152-68.187-152-152s68.187-152,152-152,152,68.187,152,152S283.813,464,200,464Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-smile" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
          className="ci-primary"
        />
        <rect
          width="40"
          height="40"
          x="152"
          y="200"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="40"
          height="40"
          x="320"
          y="200"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M338.289,307.2A83.6,83.6,0,0,1,260.3,360H251.7a83.6,83.6,0,0,1-77.992-52.8l-1.279-3.2H137.968L144,319.081A116,116,0,0,0,251.7,392H260.3A116,116,0,0,0,368,319.081L374.032,304H339.568Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-smoke-free" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="384 316.118 416 348.118 416 240 384 240 384 316.118"
          className="ci-primary"
        />
        <rect
          width="32"
          height="120"
          x="440"
          y="240"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M363.451,114.055a64.1,64.1,0,0,0-4.649,76.993L364.77,200h38.46l-17.8-26.7a31.982,31.982,0,0,1,2.32-38.418,63.745,63.745,0,0,0,3.479-78.69L385.377,48H348.8l-1.82,1.3,18.208,25.49A31.808,31.808,0,0,1,363.451,114.055Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M435.451,114.055a64.1,64.1,0,0,0-4.649,76.993L436.77,200h38.46l-17.8-26.7a31.982,31.982,0,0,1,2.32-38.418,63.745,63.745,0,0,0,3.479-78.69L457.377,48H420.8l-1.82,1.3,18.208,25.49A31.808,31.808,0,0,1,435.451,114.055Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M262.627,240l-224-224H16V38.627L217.373,240H16V360H337.373l136,136H496V473.373ZM48,328V272H249.373l56,56Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-smoke-slash" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="384 316.118 416 348.118 416 240 384 240 384 316.118"
          className="ci-primary"
        />
        <rect
          width="32"
          height="120"
          x="440"
          y="240"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M363.451,114.055a64.1,64.1,0,0,0-4.649,76.993L364.77,200h38.46l-17.8-26.7a31.982,31.982,0,0,1,2.32-38.418,63.745,63.745,0,0,0,3.479-78.69L385.377,48H348.8l-1.82,1.3,18.208,25.49A31.808,31.808,0,0,1,363.451,114.055Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M435.451,114.055a64.1,64.1,0,0,0-4.649,76.993L436.77,200h38.46l-17.8-26.7a31.982,31.982,0,0,1,2.32-38.418,63.745,63.745,0,0,0,3.479-78.69L457.377,48H420.8l-1.82,1.3,18.208,25.49A31.808,31.808,0,0,1,435.451,114.055Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M262.627,240l-224-224H16V38.627L217.373,240H16V360H337.373l136,136H496V473.373ZM48,328V272H249.373l56,56Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-smoke" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M16,240V360H360V240H16Zm312,88H48V272H328Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="120"
          x="384"
          y="240"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="120"
          x="440"
          y="240"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M385.428,173.3a31.982,31.982,0,0,1,2.32-38.418,63.745,63.745,0,0,0,3.479-78.69L385.377,48H348.8l-1.82,1.3,18.207,25.49a31.807,31.807,0,0,1-1.736,39.265,64.1,64.1,0,0,0-4.649,76.993L364.77,200h38.46Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M457.428,173.3a31.982,31.982,0,0,1,2.32-38.418,63.745,63.745,0,0,0,3.479-78.69L457.377,48H420.8l-1.82,1.3,18.207,25.49a31.807,31.807,0,0,1-1.736,39.265,64.1,64.1,0,0,0-4.649,76.993L436.77,200h38.46Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-smoking-room" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M16,240V360H360V240H16Zm312,88H48V272H328Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="120"
          x="384"
          y="240"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="120"
          x="440"
          y="240"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M385.428,173.3a31.982,31.982,0,0,1,2.32-38.418,63.745,63.745,0,0,0,3.479-78.69L385.377,48H348.8l-1.82,1.3,18.207,25.49a31.807,31.807,0,0,1-1.736,39.265,64.1,64.1,0,0,0-4.649,76.993L364.77,200h38.46Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M457.428,173.3a31.982,31.982,0,0,1,2.32-38.418,63.745,63.745,0,0,0,3.479-78.69L457.377,48H420.8l-1.82,1.3,18.207,25.49a31.807,31.807,0,0,1-1.736,39.265,64.1,64.1,0,0,0-4.649,76.993L436.77,200h38.46Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-snowflake" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="135.279 206.728 224.136 258.323 144.097 304.797 48.308 279.129 48.308 312.259 123.155 332.313 102.99 407.571 131.68 424.135 155.518 335.169 240 286.115 240 374.402 168.823 445.579 197.513 462.144 258 401.657 317.135 460.792 345.826 444.228 272 370.402 272 286.115 355.002 334.31 379.279 424.914 407.97 408.349 387.596 332.313 464 311.841 464 278.712 367.508 304.567 287.864 258.323 376.327 206.957 464 230.449 464 197.32 394.346 178.657 413.576 106.888 384.886 90.323 361.196 178.739 272 230.53 272 130.568 338.833 63.735 310.143 47.171 254.971 102.343 200.664 48.037 171.974 64.601 240 132.627 240 230.53 149.325 177.88 126.073 91.103 97.382 107.667 116.404 178.657 48.308 196.903 48.308 230.032 135.279 206.728"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-soccer" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M425.706,86.294A240,240,0,0,0,86.294,425.706,240,240,0,0,0,425.706,86.294Zm-4.464,43.535A206.875,206.875,0,0,1,463.824,247.8l-66.14-49.772ZM316.033,56.845l-58.378,43.37L196.53,56.677a208.143,208.143,0,0,1,119.5.168ZM116.8,198.047,48.156,248.33A206.9,206.9,0,0,1,91.248,129.189ZM86.2,376h79.365L190.6,453.458A208.923,208.923,0,0,1,86.2,376Zm140.787,85.967L188.85,344H67.562a206.3,206.3,0,0,1-17.324-57.527l104.967-76.9L115.557,102.715a208.938,208.938,0,0,1,45.714-31.864l96.781,68.934,92.741-68.9a208.922,208.922,0,0,1,45.884,32.048L359.833,209.6l101.951,76.721A206.272,206.272,0,0,1,444.438,344H327.512L285.467,461.9a208.076,208.076,0,0,1-58.482.064Zm95.606-8.9L350.075,376H425.8A208.961,208.961,0,0,1,322.591,453.069Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M346.809,223.427,257.854,158.8,168.9,223.427,202.876,328H312.831ZM289.582,296H226.125l-19.609-60.351,51.338-37.3,51.337,37.3Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-sofa" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M448,242.025V152a48.055,48.055,0,0,0-48-48H112a48.055,48.055,0,0,0-48,48v90.025A64.115,64.115,0,0,0,16,304V416a32.036,32.036,0,0,0,32,32H64v48H96V448H416v48h32V448h16a32.036,32.036,0,0,0,32-32V304A64.115,64.115,0,0,0,448,242.025ZM112,416H48V304a32,32,0,0,1,64,0Zm256,0H144V320H368Zm2.025-128H141.975A64.243,64.243,0,0,0,96,242.025V152a16.019,16.019,0,0,1,16-16H400a16.019,16.019,0,0,1,16,16v90.025A64.243,64.243,0,0,0,370.025,288ZM464,416H400V304a32,32,0,0,1,64,0l.02,112Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-sort-alpha-down" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="206.392 382.863 154.509 434.745 154.509 17.177 122.509 17.177 122.509 434.745 70.627 382.863 48 405.49 138.509 496 229.019 405.49 206.392 382.863"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="291.313 457.177 435.313 457.177 435.313 425.177 326.274 425.177 435.313 324.445 435.313 281.177 299.313 281.177 299.313 313.177 400.353 313.177 291.313 413.909 291.313 457.177"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M343.781,49.177l-58.666,176h33.73l18.667-56h59.6l18.666,56h33.731l-58.666-176Zm4.4,88,18.667-56h.935l18.667,56Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-sort-alpha-up" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="75.313 130.313 127.196 78.432 127.196 496 159.196 496 159.196 78.432 211.079 130.314 233.706 107.687 143.196 17.177 52.687 107.687 75.313 130.313"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="440 280 304 280 304 312 405.04 312 296 412.732 296 456 440 456 440 424 330.96 424 440 323.268 440 280"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M395.532,48H348.468L289.8,224h33.73L342.2,168h59.6l18.667,56H454.2Zm-42.667,88,18.667-56h.936l18.667,56Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-sort-ascending" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="43.314 130.51 95.196 78.627 95.196 496.196 127.196 496.196 127.196 78.627 179.079 130.51 201.706 107.883 111.196 17.372 20.686 107.883 43.314 130.51"
          className="ci-primary"
        />
        <rect
          width="120"
          height="32"
          x="184"
          y="160"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="184"
          height="32"
          x="184"
          y="232"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="248"
          height="32"
          x="184"
          y="304"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="312"
          height="32"
          x="184"
          y="376"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-sort-descending" viewBox="0 0 512 512">
        <rect
          width="120"
          height="32"
          x="184"
          y="288"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="184"
          height="32"
          x="184"
          y="216"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="248"
          height="32"
          x="184"
          y="144"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="312"
          height="32"
          x="184"
          y="72"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="95.196 16 95.196 433.568 43.313 381.686 20.687 404.313 111.196 494.823 201.705 404.313 179.078 381.687 127.196 433.568 127.196 16 95.196 16"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-sort-numeric-down" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="151.196 16 151.196 433.568 99.313 381.687 76.687 404.313 167.196 494.823 257.706 404.313 235.079 381.686 183.196 433.568 183.196 16 151.196 16"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="432 200 392 200 392 56 360 56 360 88 328 88 328 120 360 120 360 200 320 200 320 232 432 232 432 200"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M355.2,432H336v32h19.2A76.887,76.887,0,0,0,432,387.2V335.6A55.663,55.663,0,0,0,376.4,280H372a55.663,55.663,0,0,0-55.6,55.6V340A55.663,55.663,0,0,0,372,395.6h4.4a55.262,55.262,0,0,0,23.474-5.215A44.849,44.849,0,0,1,355.2,432Zm21.2-68.4H372A23.627,23.627,0,0,1,348.4,340v-4.4A23.627,23.627,0,0,1,372,312h4.4A23.627,23.627,0,0,1,400,335.6V340A23.627,23.627,0,0,1,376.4,363.6Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-sort-numeric-up" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="102.627 130.313 154.509 78.432 154.509 496 186.509 496 186.509 78.432 238.392 130.314 261.019 107.687 170.509 17.177 80 107.687 102.627 130.313"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="435.313 200 395.313 200 395.313 56 363.313 56 363.313 88 331.313 88 331.313 120 363.313 120 363.313 200 323.313 200 323.313 232 435.313 232 435.313 200"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M358.514,432h-19.2v32h19.2a76.886,76.886,0,0,0,76.8-76.8V335.6a55.662,55.662,0,0,0-55.6-55.6h-4.4a55.663,55.663,0,0,0-55.6,55.6V340a55.663,55.663,0,0,0,55.6,55.6h4.4a55.263,55.263,0,0,0,23.475-5.215A44.85,44.85,0,0,1,358.514,432Zm21.2-68.4h-4.4a23.627,23.627,0,0,1-23.6-23.6v-4.4a23.627,23.627,0,0,1,23.6-23.6h4.4a23.626,23.626,0,0,1,23.6,23.6V340A23.626,23.626,0,0,1,379.713,363.6Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-spa" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M382.988,237.57a251.854,251.854,0,0,0-102.8-180.91L251.657,36,224.922,56.79A250.836,250.836,0,0,0,128.643,237.5,176.226,176.226,0,0,0,96,234.451H16V300c0,97.047,78.953,176,176,176H320c97.047,0,176-78.953,176-176V234.451H416A176.161,176.161,0,0,0,382.988,237.57ZM244.568,82.05,252.343,76l9.08,6.575a219.732,219.732,0,0,1,90.163,164.079A177.028,177.028,0,0,0,256,337.171a177.022,177.022,0,0,0-95.824-90.6A217.523,217.523,0,0,1,244.568,82.05ZM240,444H192c-79.4,0-144-64.6-144-144V266.451H96c79.4,0,144,64.6,144,144ZM464,300c0,79.4-64.6,144-144,144H272V410.451c0-79.4,64.6-144,144-144h48Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-space-bar" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="40 288 40 416 464 416 464 288 432 288 432 384 72 384 72 288 40 288"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-speak" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M410.7,286.969c.428-.853.848-1.712,1.252-2.564L456,191.915V169.024l-3.063-4.209c-.579-.794-58.045-79.741-77.516-105.7-21.563-28.752-42.328-41.573-67.329-41.573-19.5,0-39.3,9.269-58.825,27.549A169.483,169.483,0,0,0,236,59.063,169.483,169.483,0,0,0,222.733,45.09c-19.528-18.28-39.32-27.549-58.825-27.549-25,0-45.766,12.821-67.329,41.573-19.471,25.96-76.937,104.907-77.516,105.7L16,169.024v22.891l44.037,92.477q.617,1.3,1.262,2.583a134.918,134.918,0,0,0,50.722,54.836,138.545,138.545,0,0,0,71.9,20.065H288.077a138.545,138.545,0,0,0,71.9-20.065A134.924,134.924,0,0,0,410.7,286.969ZM183.923,329.876c-39.666,0-76.572-22.473-94.02-57.247-.327-.651-.648-1.308-.968-1.982L48,184.685v-5.246c12.2-16.749,57.436-78.8,74.179-101.126,19.015-25.354,31.765-28.772,41.729-28.772,23.113,0,47.41,28.439,54.806,39.374L223.468,96h25.064l4.754-7.085C260.14,78.7,284.92,49.541,308.092,49.541c9.964,0,22.714,3.418,41.729,28.773C366.563,100.637,411.8,162.69,424,179.439v5.246l-40.941,85.976c-.314.66-.635,1.317-.959,1.962-17.451,34.78-54.357,57.253-94.023,57.253Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M304.429,112.851l-10.073,11.394c-.233.265-24.313,26.43-58.356,26.43-34.158,0-58.166-26.219-58.356-26.43l-10.073-11.394L83.93,179.539l44.393,89.547,11.457-1.637a680.122,680.122,0,0,1,192.44,0l11.457,1.637,44.393-89.547Zm20.815,121.373a711.9,711.9,0,0,0-178.488,0L124.07,188.461,164.912,155.9c13.575,11.028,38.644,26.778,71.088,26.778s57.513-15.75,71.088-26.778l40.842,32.564Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M342.77,383.422h0v32h0a110.961,110.961,0,0,0,107-82.1l-30.92-8.285A78.9,78.9,0,0,1,342.77,383.422Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M480.679,341.605c-16.325,60.868-71.962,105.817-137.909,105.817h0v32h0c80.729,0,148.837-55.024,168.82-129.534Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-speaker" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M384,16H128A32.036,32.036,0,0,0,96,48V464a32.036,32.036,0,0,0,32,32H384a32.036,32.036,0,0,0,32-32V48A32.036,32.036,0,0,0,384,16Zm0,448H128V48H384l.021,416Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,240a96,96,0,1,0,96,96A96.108,96.108,0,0,0,256,240Zm0,160a64,64,0,1,1,64-64A64.072,64.072,0,0,1,256,400Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,200a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,200Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,104Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="240"
          y="320"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-speech" viewBox="0 0 512 512">
        <rect
          width="32"
          height="32"
          x="144"
          y="240"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="240"
          y="240"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="336"
          y="240"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M464,32H48A32.036,32.036,0,0,0,16,64V352a32.036,32.036,0,0,0,32,32h64V496h30.627l112-112H464a32.036,32.036,0,0,0,32-32V64A32.036,32.036,0,0,0,464,32Zm0,320H241.373L144,449.373V352H48V64H464Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-speedometer" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M425.706,142.294A240,240,0,0,0,16,312v88H160V368H48V312c0-114.691,93.309-208,208-208s208,93.309,208,208v56H352v32H496V312A238.432,238.432,0,0,0,425.706,142.294Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="80"
          y="264"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="240"
          y="128"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="136"
          y="168"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="400"
          y="264"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M297.222,335.1l69.2-144.173-28.85-13.848L268.389,321.214A64.141,64.141,0,1,0,297.222,335.1ZM256,416a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,416Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-spreadsheet" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M16,64V456H496V64ZM464,424H48V96H464Z"
          className="ci-primary"
        />
        <rect
          width="88"
          height="32"
          x="88"
          y="136"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="88"
          height="32"
          x="88"
          y="208"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="88"
          height="32"
          x="88"
          y="280"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="88"
          height="32"
          x="88"
          y="352"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="136"
          height="32"
          x="288"
          y="136"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="136"
          height="32"
          x="288"
          y="208"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="136"
          height="32"
          x="288"
          y="280"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="136"
          height="32"
          x="288"
          y="352"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="216"
          y="136"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="216"
          y="208"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="216"
          y="280"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="216"
          y="352"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-square" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M476,16H36A20.023,20.023,0,0,0,16,36V476a20.023,20.023,0,0,0,20,20H476a20.023,20.023,0,0,0,20-20V36A20.023,20.023,0,0,0,476,16ZM464,464H48V48H464Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-star-half" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M135.539,453.9a7.979,7.979,0,0,1-11.51-8.362L144.6,312.2,49.58,216.411a8,8,0,0,1,4.4-13.53L187.15,181.238,256,76.2V17.833L237.237,46.457,168.111,151.912,48.843,171.3a39.847,39.847,0,0,0-31.626,27.122A40.52,40.52,0,0,0,16,203.183v15.276a39.894,39.894,0,0,0,10.862,20.488l83.65,84.327L92.4,440.663a39.979,39.979,0,0,0,57.548,41.812L256,428.977V393.136Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-star" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-storage" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M16,48V464H496V48ZM464,432H48V336H464Zm0-128H48V208H464ZM48,176V80H464v96Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="80"
          y="112"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="80"
          y="240"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="80"
          y="368"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-stream" viewBox="0 0 512 512">
        <rect
          width="336"
          height="32"
          x="16"
          y="112"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="336"
          height="32"
          x="160"
          y="240"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="336"
          height="32"
          x="16"
          y="368"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-strikethrough" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M16,496H496V16H16ZM48,48H464V464H48Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M344.766,288H257.025l38.054,25.748a21.894,21.894,0,0,1,9.558,16.187,20.653,20.653,0,0,1-6.058,16.824C294.7,350.584,286.705,357,276.677,357h-104v54h104c21.722,0,42.972-9.165,59.835-25.808a74.638,74.638,0,0,0,21.9-60.218A75.831,75.831,0,0,0,344.766,288Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M215.426,194.653c-12.195-8.251-9.725-20.755-8.677-24.389,1.269-4.4,5.647-14.643,18.964-15.248,6.468-.018,118.281,0,118.281,0l.012-54s-119.176-.006-119.795.015c-32.949,1.1-60.171,22.419-69.351,54.278-7.125,24.726-1.819,49.847,13.481,68.688H80v32H432V224H258.8Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-sun" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M256,104c-83.813,0-152,68.187-152,152s68.187,152,152,152,152-68.187,152-152S339.813,104,256,104Zm0,272A120,120,0,1,1,376,256,120.136,120.136,0,0,1,256,376Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="48"
          x="240"
          y="16"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="48"
          x="240"
          y="448"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="48"
          height="32"
          x="448"
          y="240"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="48"
          height="32"
          x="16"
          y="240"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="45.255"
          x="400"
          y="393.373"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
          transform="rotate(-45 416 416)"
        />
        <rect
          width="32.001"
          height="45.255"
          x="80"
          y="73.373"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
          transform="rotate(-45 96 96)"
        />
        <rect
          width="45.255"
          height="32"
          x="73.373"
          y="400"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
          transform="rotate(-45.001 96.002 416.003)"
        />
        <rect
          width="45.255"
          height="32.001"
          x="393.373"
          y="80"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
          transform="rotate(-45 416 96)"
        />
      </symbol>
      <symbol id="cil-swap-horizontal" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="364.118 67.313 433.373 136.568 160 136.568 160 168.568 433.373 168.568 364.118 237.823 386.745 260.45 494.628 152.568 386.745 44.687 364.118 67.313"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="147.882 267.882 125.255 245.255 17.373 353.137 125.255 461.02 147.882 438.393 78.627 369.137 352 369.137 352 337.137 78.627 337.137 147.882 267.882"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-swap-vertical" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="384 433.373 384 160 352 160 352 434.51 282.177 364.687 259.55 387.313 367.432 495.196 475.313 387.313 452.687 364.687 384 433.373"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="159.432 17.372 51.55 125.255 74.177 147.882 144 78.059 144 352 176 352 176 79.195 244.687 147.882 267.313 125.255 159.432 17.372"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-swimming" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M223.308,137.5a16.051,16.051,0,0,1,17.922,3.029L274.113,175.7,172.058,265.743c9.554,1.9,16.308,5.041,22.132,7.758,7.78,3.631,13.925,6.5,27.517,6.5s19.738-2.868,27.519-6.5l.154-.072a173.415,173.415,0,0,0,41.417-27.1l27.048-23.866,52.9,56.573c6.179-1.137,10.561-3.17,15.624-5.532a99.961,99.961,0,0,1,16.907-6.533L264.388,118.444l-.373-.385a48.151,48.151,0,0,0-54.239-9.555l-64.542,30.12,13.532,29Z"
          className="ci-primary"
        />
        <circle
          cx="372"
          cy="132"
          r="36"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M427.425,376c-20.693,0-31.983,5.268-41.053,9.5-7.782,3.631-13.928,6.5-27.523,6.5s-19.739-2.868-27.52-6.5c-9.071-4.232-20.359-9.5-41.052-9.5s-31.981,5.269-41.051,9.5c-7.781,3.631-13.926,6.5-27.519,6.5s-19.737-2.868-27.517-6.5c-9.07-4.232-20.358-9.5-41.05-9.5s-31.981,5.269-41.051,9.5c-7.781,3.631-13.926,6.5-27.519,6.5s-19.738-2.868-27.519-6.5C47.981,381.269,36.692,376,16,376v32c13.593,0,19.738,2.868,27.519,6.5,9.07,4.232,20.359,9.5,41.051,9.5s31.981-5.269,41.051-9.5c7.781-3.631,13.926-6.5,27.519-6.5s19.737,2.868,27.517,6.5c9.07,4.232,20.358,9.5,41.05,9.5s31.981-5.269,41.051-9.5c7.781-3.631,13.927-6.5,27.519-6.5s19.739,2.868,27.52,6.5c9.071,4.232,20.359,9.5,41.052,9.5s31.983-5.268,41.054-9.5c7.781-3.631,13.928-6.5,27.522-6.5s19.741,2.868,27.521,6.5c9.072,4.233,20.361,9.5,41.054,9.5V392c-13.594,0-19.741-2.868-27.521-6.5C459.407,381.268,448.118,376,427.425,376Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M493.3,311.957c-11.741-.359-17.576-3.075-24.82-6.456-8.666-4.044-19.376-9.02-38.353-9.458-.889-.02-1.775-.043-2.7-.043s-1.812.023-2.7.043c-18.977.438-29.688,5.414-38.352,9.458-7.246,3.381-13.08,6.1-24.822,6.456-.869.026-1.764.043-2.7.043s-1.832-.017-2.7-.043c-11.741-.359-17.575-3.075-24.819-6.456-8.665-4.043-19.375-9.019-38.351-9.458-.889-.02-1.774-.043-2.7-.043s-1.811.023-2.7.043c-18.976.438-29.687,5.415-38.351,9.458-7.244,3.381-13.078,6.1-24.818,6.456-.869.026-1.764.043-2.7.043s-1.831-.017-2.7-.043c-11.739-.359-17.573-3.075-24.816-6.456-8.664-4.043-19.374-9.02-38.349-9.458-.629-.019-1.286-.027-1.95-.033l0,0c-.255,0-.5-.012-.753-.012-.926,0-1.812.023-2.7.043-18.975.438-29.686,5.415-38.35,9.458-7.245,3.381-13.078,6.1-24.818,6.456-.869.026-1.764.043-2.7.043s-1.831-.017-2.7-.043C70.13,311.6,64.3,308.882,57.051,305.5c-8.664-4.043-19.374-9.02-38.35-9.458-.889-.02-1.775-.043-2.7-.043v32c13.593,0,19.738,2.868,27.519,6.5,9.07,4.232,20.359,9.5,41.051,9.5s31.981-5.269,41.051-9.5c7.781-3.631,13.926-6.5,27.519-6.5s19.737,2.868,27.517,6.5c9.07,4.232,20.358,9.5,41.05,9.5s31.981-5.269,41.051-9.5c7.781-3.631,13.927-6.5,27.519-6.5s19.739,2.868,27.52,6.5c9.071,4.232,20.359,9.5,41.052,9.5s31.983-5.268,41.054-9.5c7.781-3.631,13.928-6.5,27.522-6.5s19.741,2.868,27.521,6.5c9.072,4.233,20.361,9.5,41.054,9.5V312C495.063,312,494.168,311.983,493.3,311.957Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-sync" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M410.168,133.046,381.21,104.088,464.017,104l-.034-32L328,72.144V208h32V128.132l27.541,27.541A152.5,152.5,0,0,1,279.972,416l.056,32a184.5,184.5,0,0,0,130.14-314.954Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M232.028,104l-.056-32a184.5,184.5,0,0,0-130.14,314.954L130.878,416H48v32H184V312H152v79.868l-27.541-27.541A152.5,152.5,0,0,1,232.028,104Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-tablet" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M440,16H80A24.028,24.028,0,0,0,56,40V472a24.028,24.028,0,0,0,24,24H440a24.028,24.028,0,0,0,24-24V40A24.028,24.028,0,0,0,440,16Zm-8,448H88V368H432Zm0-128H88V48H432Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="232"
          y="400"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-tag" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M485.887,263.261,248,25.373A31.791,31.791,0,0,0,225.373,16H64A48.055,48.055,0,0,0,16,64V225.078A32.115,32.115,0,0,0,26.091,248.4L279.152,486.125a23.815,23.815,0,0,0,16.41,6.51q.447,0,.9-.017a23.828,23.828,0,0,0,16.79-7.734L486.581,296.479A23.941,23.941,0,0,0,485.887,263.261ZM295.171,457.269,48,225.078V64A16.019,16.019,0,0,1,64,48H225.373L457.834,280.462Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M148,96a52,52,0,1,0,52,52A52.059,52.059,0,0,0,148,96Zm0,72a20,20,0,1,1,20-20A20.023,20.023,0,0,1,148,168Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-tags" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M511.974,271.891a47.744,47.744,0,0,0-14.706-33.008L311.57,57.98a29.9,29.9,0,0,0-21.2-8.731H257.228l217.754,212.6.092.088a15.907,15.907,0,0,1,.741,22.337l-156.4,173.355,21.953,21.356L499.447,305.85A47.748,47.748,0,0,0,511.974,271.891Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M426.9,283.161a23.924,23.924,0,0,0-5.231-24.742c-.106-.111-.2-.231-.306-.34L224.307,57.716l-.094-.094a31.791,31.791,0,0,0-22.628-9.373H60.194A44.244,44.244,0,0,0,16,92.443v141.1a32.121,32.121,0,0,0,10.045,23.28l210.32,200.2.077.073a23.817,23.817,0,0,0,16.409,6.508q.447,0,.9-.017a24.111,24.111,0,0,0,6.741-1.217,23.854,23.854,0,0,0,10.047-6.517L421.983,291.232A24.033,24.033,0,0,0,426.9,283.161ZM252.5,428.2,48.077,233.612,48,233.54V92.443A12.208,12.208,0,0,1,60.194,80.249h141.39l191.7,194.918Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M140,112a52,52,0,1,0,52,52A52.059,52.059,0,0,0,140,112Zm0,72a20,20,0,1,1,20-20A20.023,20.023,0,0,1,140,184Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-task" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M222.085,235.644l-62.01-62.01L81.8,251.905l62.009,62.01-.04.04,66.958,66.957,11.354,11.275.04.039,66.957-66.957,11.273-11.354L502.628,111.644,424.356,33.373Zm44.33,66.958-11.274,11.353h0l-33.057,33.056-.04-.039-33.017-33.017.04-.04-62.009-62.01,33.016-33.016,62.01,62.009L424.356,78.627l33.017,33.017Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="448 464 48 464 48 64 348.22 64 380.22 32 16 32 16 496 480 496 480 179.095 448 211.095 448 464"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-taxi" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="112 304 112 208 152 208 152 176 40 176 40 208 80 208 80 304 112 304"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="333.483 304 356 269.358 378.517 304 416.683 304 375.083 240 416.683 176 378.517 176 356 210.642 333.483 176 295.317 176 336.917 240 295.317 304 333.483 304"
          className="ci-primary"
        />
        <rect
          width="32"
          height="128"
          x="440"
          y="176"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="432"
          height="32"
          x="40"
          y="104"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="432"
          height="32"
          x="40"
          y="344"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M241.337,280l8,24h33.731L240.4,176H194.448L155.009,304h33.484l7.4-24ZM217.72,209.146,230.671,248H205.748Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-tennis-ball" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M425.706,86.294A240,240,0,0,0,86.294,425.706,240,240,0,0,0,425.706,86.294ZM282.593,107.725c9.24-17.668,11.486-36.562,6.711-57.046,88.067,14.234,157.784,83.95,172.018,172.017-20.485-4.774-39.379-2.529-57.047,6.711-26.085,13.641-45.371,40.8-64.022,67.071-15.922,22.423-32.385,45.61-52.487,59.911-21.348,15.189-44.557,18.6-73.038,10.723-23.426-6.474-43.407-26.086-43.582-26.258-.2-.2-19.823-20.295-26.258-43.581-7.872-28.482-4.465-51.691,10.723-73.039,14.3-20.1,37.488-36.565,59.911-52.487C241.79,153.1,268.952,133.81,282.593,107.725ZM256,464C141.309,464,48,370.691,48,256,48,141.551,140.917,48.4,255.276,48.009,271.1,90.1,244.08,112.224,197,145.655,149.617,179.3,90.653,221.163,114.044,305.8c8.764,31.706,33.43,56.637,34.476,57.683S174.5,389.192,206.2,397.956a137.081,137.081,0,0,0,36.59,5.291c60.9,0,95.156-48.25,123.553-88.243,33.432-47.085,55.556-74.106,97.646-58.28C463.6,371.083,370.449,464,256,464Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-tennis" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M144,80a64,64,0,1,0-64,64A64.072,64.072,0,0,0,144,80ZM48,80a32,32,0,1,1,32,32A32.036,32.036,0,0,1,48,80Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M440.65,71.436a133.367,133.367,0,0,0-94.233-39.348l-.622,0c-37.49,0-74.1,15.969-103.135,45.007-29.579,29.58-53.748,74.529-64.652,120.24a217.034,217.034,0,0,0-5.459,34.69,119.932,119.932,0,0,1-15.265,51.463A142.364,142.364,0,0,1,134.593,313L55.308,394.211C42.919,406.642,41.6,419.425,42.682,427.967c1.254,9.919,6.525,19.771,15.243,28.49S76.5,470.447,86.416,471.7a37.826,37.826,0,0,0,4.754.3c8.188,0,18.755-2.679,29.074-13l79.278-81.2a142.035,142.035,0,0,1,31.969-24.044,118.7,118.7,0,0,1,48.6-13.943,216.365,216.365,0,0,0,34.886-5.562c45.544-10.991,90.409-35.227,120.011-64.83h0c29.2-29.2,45.182-66.048,45.005-103.757A133.37,133.37,0,0,0,440.65,71.436Zm-343.094,365c-3.944,3.917-6.256,3.625-7.128,3.517-2.729-.346-6.328-2.577-9.875-6.124s-5.779-7.146-6.124-9.876c-.111-.877-.405-3.2,3.577-7.186l63.374-64.912,19.61,19.61Zm86.05-87.61-19.972-19.971a173.6,173.6,0,0,0,21.186-29.091A72.769,72.769,0,0,0,212.7,327.639,173.632,173.632,0,0,0,183.606,348.827ZM412.366,246.8c-25.234,25.233-65.426,46.826-104.891,56.35C268.2,312.627,235.3,308.834,219.463,293,185.7,259.235,210.54,154.468,265.288,99.72c25.064-25.064,53.5-35.508,80.192-35.508a103.213,103.213,0,0,1,72.543,29.851C453.673,129.713,463.806,195.358,412.366,246.8Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-terminal" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M472,40H40A24.028,24.028,0,0,0,16,64V456a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V64A24.028,24.028,0,0,0,472,40Zm-8,408H48V72H464Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="115.962 282.627 189.407 199.955 115.956 117.367 92.044 138.633 146.593 199.966 92.038 261.373 115.962 282.627"
          className="ci-primary"
        />
        <rect
          width="128"
          height="32"
          x="216"
          y="240"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-terrain" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="40.841 312 144.493 199.12 216.397 271.024 216.397 271.024 292.687 347.313 315.313 324.687 238.244 247.617 327.738 151.73 470.836 312 496 312 496 292.136 328.262 104.27 215.603 224.976 143.507 152.88 16 291.741 16 312 40.841 312"
          className="ci-primary"
        />
        <rect
          width="480"
          height="32"
          x="16"
          y="392"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-text-direction-ltr" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="388.687 355.313 433.373 400 24 400 24 432 433.373 432 388.687 476.687 411.313 499.313 494.627 416 411.313 332.687 388.687 355.313"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M304,368V72h56V40H172a100,100,0,0,0,0,200h36V368ZM240,72h32V336H240ZM172,208a68,68,0,0,1,0-136h36V208Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-text-direction-rtl" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="131.313 355.313 108.687 332.687 25.373 416 108.687 499.313 131.313 476.687 86.627 432 496 432 496 400 86.627 400 131.313 355.313"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M352,368V72h56V40H220a100,100,0,0,0,0,200h36V368ZM288,72h32V336H288ZM220,208a68,68,0,0,1,0-136h36V208Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-text-shapes" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M231.359,147,150.438,352h45.155l15.593-39.5h89.628L316.407,352h45.155L280.641,147Zm-3.594,123.5L256,198.967,284.235,270.5Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M384,56H128V16H16V128H56V384H16V496H128V456H384v40H496V384H456V128h40V16H384ZM48,96V48H96V96ZM96,464H48V416H96Zm288-40H128V384H88V128h40V88H384v40h40V384H384Zm80-8v48H416V416ZM416,48h48V96H416Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-text-size" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="176 184 208 184 208 136 304 136 304 368 264 368 264 400 408 400 408 368 368 368 368 136 464 136 464 184 496 184 496 104 176 104 176 184"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="16 280 48 280 48 248 104 248 104 400 72 400 72 432 184 432 184 400 152 400 152 248 216 248 216 280 248 280 248 216 16 216 16 280"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-text-square" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M16,496H496V16H16ZM48,48H464V464H48Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="112 176 144 176 144 144 224 144 224 368 192 368 192 400 320 400 320 368 288 368 288 144 368 144 368 176 400 176 400 112 112 112 112 176"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-text-strike" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M16,496H496V16H16ZM48,48H464V464H48Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M344.766,288H257.025l38.054,25.748a21.894,21.894,0,0,1,9.558,16.187,20.653,20.653,0,0,1-6.058,16.824C294.7,350.584,286.705,357,276.677,357h-104v54h104c21.722,0,42.972-9.165,59.835-25.808a74.638,74.638,0,0,0,21.9-60.218A75.831,75.831,0,0,0,344.766,288Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M215.426,194.653c-12.195-8.251-9.725-20.755-8.677-24.389,1.269-4.4,5.647-14.643,18.964-15.248,6.468-.018,118.281,0,118.281,0l.012-54s-119.176-.006-119.795.015c-32.949,1.1-60.171,22.419-69.351,54.278-7.125,24.726-1.819,49.847,13.481,68.688H80v32H432V224H258.8Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-text" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="440 168 440 88 72 88 72 168 104 168 136 168 136 120 224 120 224 400 168 400 168 432 344 432 344 400 288 400 288 120 376 120 376 168 408 168 440 168"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-thumb-down" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M127.475,104H51.428a24.086,24.086,0,0,0-23.511,19.176l-1.5,7.31a503.561,503.561,0,0,0,1.477,210.663A24.143,24.143,0,0,0,51.334,360h76.141a24.028,24.028,0,0,0,24-24V128A24.027,24.027,0,0,0,127.475,104Zm-8,224H57.811a471.525,471.525,0,0,1-.046-191.082l.188-.918h61.522Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M492.835,218.474,421.583,93.246A24.247,24.247,0,0,0,400.547,81.01h-131.6a24.212,24.212,0,0,0-12.246,3.327l-72.012,42.244v37.1l86.376-50.671H396.012L464,232.5v9.271L444.3,294.3H316l-16,16v48.979l1.418,6.585,10.991,24.341A56.141,56.141,0,0,1,290.7,461.09L207.981,280H184v24l81.007,177.854a24.313,24.313,0,0,0,22.1,14.126,23.923,23.923,0,0,0,9.663-2.034,88.117,88.117,0,0,0,44.8-116.911L332,355.835V326.3h117.7a24.314,24.314,0,0,0,22.661-15.7l22.09-58.906a24.13,24.13,0,0,0,1.542-8.5V230.44A24.256,24.256,0,0,0,492.835,218.474Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-thumb-up" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M126.638,202.672H51.986a24.692,24.692,0,0,0-24.242,19.434,487.088,487.088,0,0,0-1.466,206.535l1.5,7.189a24.94,24.94,0,0,0,24.318,19.78h74.547a24.866,24.866,0,0,0,24.837-24.838V227.509A24.865,24.865,0,0,0,126.638,202.672ZM119.475,423.61H57.916l-.309-1.487a455.085,455.085,0,0,1,.158-187.451h61.71Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M494.459,277.284l-22.09-58.906a24.315,24.315,0,0,0-22.662-15.706H332V173.137l9.573-21.2A88.117,88.117,0,0,0,296.772,35.025a24.3,24.3,0,0,0-31.767,12.1L184.693,222.937V248h23.731L290.7,67.882a56.141,56.141,0,0,1,21.711,70.885l-10.991,24.341L300,169.692v48.98l16,16H444.3L464,287.2v9.272L396.012,415.962H271.07l-86.377-50.67v37.1L256.7,444.633a24.222,24.222,0,0,0,12.25,3.329h131.6a24.246,24.246,0,0,0,21.035-12.234L492.835,310.5A24.26,24.26,0,0,0,496,298.531V285.783A24.144,24.144,0,0,0,494.459,277.284Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-toggle-off" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M368,128H144a128,128,0,0,0,0,256H368a128,128,0,0,0,0-256Zm0,224H144a96,96,0,0,1,0-192H368a96,96,0,0,1,0,192Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M144,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,144,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,144,288Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-toggle-on" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M368,128H144a128,128,0,0,0,0,256H368a128,128,0,0,0,0-256Zm0,224H144a96,96,0,0,1,0-192H368a96,96,0,0,1,0,192Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M368,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,368,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,368,288Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-toilet" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M469.613,46.229A77.38,77.38,0,0,0,408,16H395.619l-56,216H40v32c0,46.482,18.616,88.125,52.417,117.257C124.4,408.82,168.288,424,216,424h38.124l-8,72H448V250.04l35.411-136.585A77.379,77.379,0,0,0,469.613,46.229ZM416,464H281.876l8-72H216c-84.785,0-144-52.636-144-128H416Zm36.435-358.576L419.619,232H372.677l47.3-182.436a45.952,45.952,0,0,1,32.46,55.86Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-touch-app" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M454.423,278.957,328,243.839v-8.185a116,116,0,1,0-104,0V312H199.582l-18.494-22.6a90.414,90.414,0,0,0-126.43-13.367,20.862,20.862,0,0,0-8.026,33.47L215.084,496H472V302.08A24.067,24.067,0,0,0,454.423,278.957ZM192,132a84,84,0,1,1,136,65.9V132a52,52,0,0,0-104,0v65.9A83.866,83.866,0,0,1,192,132ZM440,464H229.3L79.141,297.75a58.438,58.438,0,0,1,77.181,11.91l28.1,34.34H256V132a20,20,0,0,1,40,0V268.161l144,40Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-transfer" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="356.687 228.687 379.313 251.313 494.627 136 379.313 20.687 356.687 43.313 433.372 120 16 120 16 152 433.372 152 356.687 228.687"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="496 360 78.628 360 155.313 283.313 132.687 260.687 17.373 376 132.687 491.313 155.313 468.687 78.628 392 496 392 496 360"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-translate" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M230.2,356.821l14.425-30.654a573.693,573.693,0,0,1-40.421-44.777q15.881-21.418,29.594-43.958A543.369,543.369,0,0,0,292.212,104H344V72H200V16H168V72H16v32H75.77a545.123,545.123,0,0,0,71.448,153.959c6.811-8.406,13.706-17.432,20.566-27.031A512.677,512.677,0,0,1,109.13,104H258.867c-29.727,97.53-84.546,169.208-126.64,213.119-48.993,51.107-91.952,76.86-92.38,77.114l1.621,2.738L48,408l8.14,13.774c1.873-1.106,46.474-27.729,98.389-81.68q15.38-15.982,29.44-32.931A608.138,608.138,0,0,0,230.2,356.821Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M333.722,200,328,212.516,209.379,472h35.185l36.571-80h141.73l36.571,80h35.185L370.278,200ZM328,360H295.764L328,289.484l24-52.5L408.236,360Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-trash" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="200"
          x="168"
          y="216"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="200"
          x="240"
          y="216"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="200"
          x="312"
          y="216"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-triangle" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M273.342,66.038a20,20,0,0,0-34.684,0h0L29.569,430.007A20,20,0,0,0,46.911,459.97H465.089a20,20,0,0,0,17.342-29.962ZM67.644,427.97,256,100.091,444.356,427.97Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-truck" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M441.885,141.649A32.028,32.028,0,0,0,415.669,128H336V80a32.036,32.036,0,0,0-32-32H48A32.036,32.036,0,0,0,16,80V408H69.082a67.982,67.982,0,0,0,133.836,0H309.082a67.982,67.982,0,0,0,133.836,0H496V226.522a23.882,23.882,0,0,0-4.338-13.763ZM47.98,80H304V256H48ZM136,432a36,36,0,1,1,36-36A36.04,36.04,0,0,1,136,432Zm240,0a36,36,0,1,1,36-36A36.04,36.04,0,0,1,376,432Zm88-56H440.994a68,68,0,0,0-129.988,0H200.994a68,68,0,0,0-129.988,0H48V288H464Zm0-120H336V160h79.669L464,229.044Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-tv" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M472,88.5H302.627l72.5-72.5H329.873l-72.5,72.5h-2.246L182.627,16H137.373l72.5,72.5H40a24.028,24.028,0,0,0-24,24v296a24.028,24.028,0,0,0,24,24H152V496H376V432.5h96a24.028,24.028,0,0,0,24-24v-296A24.028,24.028,0,0,0,472,88.5ZM344,464H184V432.5H344Zm120-63.5H48v-280H464Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-underline" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M16,496H496V16H16ZM48,48H464V464H48Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M296,152h32v88a63.966,63.966,0,0,1-88,59.313V152h24V120H136v32h32v88a96,96,0,0,0,192,0V152h32V120H296Z"
          className="ci-primary"
        />
        <rect
          width="256"
          height="32"
          x="136"
          y="368"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-usb" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M320,224h32v40H272V78.627l17.941,17.941,22.627-22.627L256,17.373,199.432,73.941l22.627,22.627L240,78.627V264H168V221.659a56,56,0,1,0-32,0V296H240v90.341a56,56,0,1,0,32,0V296H384V224h40V120H320ZM128,168a24,24,0,1,1,24,24A24.027,24.027,0,0,1,128,168ZM280,440a24,24,0,1,1-24-24A24.027,24.027,0,0,1,280,440Zm72-288h40v40H352Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-user-female" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M403.6,343.656l-72.823-47.334L344.043,272h23.428a48,48,0,0,0,44.119-66.908L361.581,90.57a112.029,112.029,0,0,0-211.162,0L100.41,205.092A48,48,0,0,0,144.529,272h23.428l13.266,24.322L108.4,343.656A79.725,79.725,0,0,0,72,410.732V496H440V410.732A79.727,79.727,0,0,0,403.6,343.656ZM408,464H104V410.732a47.836,47.836,0,0,1,21.841-40.246l97.66-63.479L186.953,240H144.529a16,16,0,0,1-14.72-22.27l50.172-114.9.448-1.143a80.029,80.029,0,0,1,151.142,0l.2.58L382.191,217.73A16,16,0,0,1,367.471,240H325.047L288.5,307.007l97.661,63.479h0A47.836,47.836,0,0,1,408,410.732Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-user-follow" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M208,16A112.127,112.127,0,0,0,96,128v79.681a80.236,80.236,0,0,0,9.768,38.308l27.455,50.333L60.4,343.656A79.725,79.725,0,0,0,24,410.732V496H312V464H56V410.732a47.836,47.836,0,0,1,21.841-40.246l97.66-63.479-41.64-76.341A48.146,48.146,0,0,1,128,207.681V128a80,80,0,0,1,160,0v79.681a48.146,48.146,0,0,1-5.861,22.985L240.5,307.007,312,353.483V315.317l-29.223-19,27.455-50.334A80.23,80.23,0,0,0,320,207.681V128A112.127,112.127,0,0,0,208,16Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="424 400 424 336 392 336 392 400 328 400 328 432 392 432 392 496 424 496 424 432 488 432 488 400 424 400"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-user-plus" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M208,16A112.127,112.127,0,0,0,96,128v79.681a80.236,80.236,0,0,0,9.768,38.308l27.455,50.333L60.4,343.656A79.725,79.725,0,0,0,24,410.732V496H312V464H56V410.732a47.836,47.836,0,0,1,21.841-40.246l97.66-63.479-41.64-76.341A48.146,48.146,0,0,1,128,207.681V128a80,80,0,0,1,160,0v79.681a48.146,48.146,0,0,1-5.861,22.985L240.5,307.007,312,353.483V315.317l-29.223-19,27.455-50.334A80.23,80.23,0,0,0,320,207.681V128A112.127,112.127,0,0,0,208,16Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="424 400 424 336 392 336 392 400 328 400 328 432 392 432 392 496 424 496 424 432 488 432 488 400 424 400"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-user-unfollow" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M216,16A112.127,112.127,0,0,0,104,128v79.68a80.239,80.239,0,0,0,9.768,38.308l27.455,50.334L68.4,343.656A79.727,79.727,0,0,0,32,410.732V496H312V464H64V410.732a47.838,47.838,0,0,1,21.84-40.246L183.5,307.007l-41.64-76.341A48.149,48.149,0,0,1,136,207.68V128a80,80,0,0,1,160,0v79.68a48.143,48.143,0,0,1-5.861,22.985L248.5,307.007,312,348.283V310.117l-21.223-13.8,27.454-50.334A80.226,80.226,0,0,0,328,207.68V128A112.127,112.127,0,0,0,216,16Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="483.314 355.314 460.686 332.686 412 381.372 363.314 332.686 340.686 355.314 389.372 404 340.686 452.686 363.314 475.314 412 426.628 460.686 475.314 483.314 452.686 434.628 404 483.314 355.314"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-user-x" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M216,16A112.127,112.127,0,0,0,104,128v79.68a80.239,80.239,0,0,0,9.768,38.308l27.455,50.334L68.4,343.656A79.727,79.727,0,0,0,32,410.732V496H312V464H64V410.732a47.838,47.838,0,0,1,21.84-40.246L183.5,307.007l-41.64-76.341A48.149,48.149,0,0,1,136,207.68V128a80,80,0,0,1,160,0v79.68a48.143,48.143,0,0,1-5.861,22.985L248.5,307.007,312,348.283V310.117l-21.223-13.8,27.454-50.334A80.226,80.226,0,0,0,328,207.68V128A112.127,112.127,0,0,0,216,16Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="483.314 355.314 460.686 332.686 412 381.372 363.314 332.686 340.686 355.314 389.372 404 340.686 452.686 363.314 475.314 412 426.628 460.686 475.314 483.314 452.686 434.628 404 483.314 355.314"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-user" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M411.6,343.656l-72.823-47.334,27.455-50.334A80.23,80.23,0,0,0,376,207.681V128a112,112,0,0,0-224,0v79.681a80.236,80.236,0,0,0,9.768,38.308l27.455,50.333L116.4,343.656A79.725,79.725,0,0,0,80,410.732V496H448V410.732A79.727,79.727,0,0,0,411.6,343.656ZM416,464H112V410.732a47.836,47.836,0,0,1,21.841-40.246l97.66-63.479-41.64-76.341A48.146,48.146,0,0,1,184,207.681V128a80,80,0,0,1,160,0v79.681a48.146,48.146,0,0,1-5.861,22.985L296.5,307.007l97.662,63.479h0A47.836,47.836,0,0,1,416,410.732Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-vector" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M368,184h47.458c-4.664,69.192-39.8,119.633-95.458,140.869V288H192v36.869C136.344,303.633,101.206,253.192,96.542,184H144V56H16V184H64.471c2.993,50.374,20.242,93.872,50.341,126.537A170.65,170.65,0,0,0,166.7,348.9L117.8,365.2a57.122,57.122,0,0,0-8.608-9.083,56.63,56.63,0,0,0-79.807,6.693h0A56.635,56.635,0,0,0,72.535,456q2.4,0,4.827-.2a56.609,56.609,0,0,0,51.731-60.634L192,374.2V416H320V374.2L382.9,395.163a57.4,57.4,0,0,0,.043,8.939A56.64,56.64,0,0,0,439.274,456q2.4,0,4.828-.2a56.63,56.63,0,1,0-47.982-92.988c-.662.782-1.3,1.582-1.91,2.392L345.3,348.9a170.65,170.65,0,0,0,51.891-38.363c30.1-32.665,47.348-76.163,50.341-126.537H496V56H368ZM48,152V88h64v64ZM91.44,415.27a24.629,24.629,0,0,1-37.62-31.8h0a24.469,24.469,0,0,1,16.752-8.644q1.053-.087,2.1-.088A24.631,24.631,0,0,1,91.44,415.27ZM288,384H224V320h64Zm132.56-.529h0a24.467,24.467,0,0,1,16.752-8.644q1.053-.087,2.1-.088a24.635,24.635,0,1,1-18.851,8.733ZM400,88h64v64H400Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-vertical-align-bottom" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="356.117 316.117 333.49 293.49 272 354.98 272 56 240 56 240 354.98 178.51 293.49 155.883 316.117 256 416.236 356.117 316.117"
          className="ci-primary"
        />
        <rect
          width="480"
          height="32"
          x="16"
          y="464"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-vertical-align-center" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="240 16 240 162.177 186.509 108.687 163.882 131.313 256 223.431 348.118 131.313 325.491 108.687 272 162.177 272 16 240 16"
          className="ci-primary"
        />
        <rect
          width="480"
          height="32"
          x="16"
          y="240"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="163.882 380.687 186.509 403.313 240 349.823 240 496 272 496 272 349.823 325.491 403.313 348.118 380.687 256 288.569 163.882 380.687"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-vertical-align-top" viewBox="0 0 512 512">
        <rect
          width="480"
          height="32"
          x="16"
          y="16"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="155.883 195.883 178.51 218.51 240 157.02 240 456 272 456 272 157.02 333.49 218.51 356.117 195.883 256 95.764 155.883 195.883"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-video" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M461,132,360,171.277V72H16V440H360V332.723L461,372h35V132Zm3,206.833-136-52.89V408H48V104H328V218.057l136-52.89Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-videogame" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M16,360H496V120H16ZM48,152H464V328H48Z"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="152 184 120 184 120 224 80 224 80 256 120 256 120 296 152 296 152 256 192 256 192 224 152 224 152 184"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="336"
          y="256"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="400"
          y="192"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-view-column" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M16,64V448H496V64ZM320,96V416H192V96ZM48,96H160V416H48ZM464,416H352V96H464Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-view-module" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M16,64V448H496V64ZM464,240H352V96H464Zm-272,0V96H320V240Zm128,32V416H192V272ZM160,96V240H48V96ZM48,272H160V416H48ZM352,416V272H464V416Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-view-quilt" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M16,64V448H496V64ZM464,240H192V96H464ZM192,272H312V416H192ZM48,96H160V416H48ZM344,416V272H464V416Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-view-stream" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M16,64V448H496V64ZM464,96V240H48V96ZM48,416V272H464V416Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-voice-over-record" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M342.322,104.837A100.443,100.443,0,0,1,342.457,231L367.4,251.02a132.373,132.373,0,0,0-.178-166.261Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M432.147,32.4,407.158,52.55a183.6,183.6,0,0,1,.248,230.594l25.03,20.1A216.053,216.053,0,0,0,432.147,32.4Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M347.6,343.656l-72.822-47.334,27.455-50.334A80.23,80.23,0,0,0,312,207.681V128a112,112,0,0,0-224,0v79.681a80.236,80.236,0,0,0,9.768,38.308l27.455,50.333L52.4,343.656A79.725,79.725,0,0,0,16,410.732V496H384V410.732A79.725,79.725,0,0,0,347.6,343.656ZM352,464H48V410.732a47.836,47.836,0,0,1,21.841-40.246l97.661-63.48-41.641-76.34A48.146,48.146,0,0,1,120,207.681V128a80,80,0,0,1,160,0v79.681a48.139,48.139,0,0,1-5.861,22.984L232.5,307.007l97.662,63.479A47.838,47.838,0,0,1,352,410.732Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-voice" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M410.7,286.969c.428-.853.848-1.712,1.252-2.564L456,191.915V169.024l-3.063-4.209c-.579-.794-58.045-79.741-77.516-105.7-21.563-28.752-42.328-41.573-67.329-41.573-19.5,0-39.3,9.269-58.825,27.549A169.483,169.483,0,0,0,236,59.063,169.483,169.483,0,0,0,222.733,45.09c-19.528-18.28-39.32-27.549-58.825-27.549-25,0-45.766,12.821-67.329,41.573-19.471,25.96-76.937,104.907-77.516,105.7L16,169.024v22.891l44.037,92.477q.617,1.3,1.262,2.583a134.918,134.918,0,0,0,50.722,54.836,138.545,138.545,0,0,0,71.9,20.065H288.077a138.545,138.545,0,0,0,71.9-20.065A134.924,134.924,0,0,0,410.7,286.969ZM183.923,329.876c-39.666,0-76.572-22.473-94.02-57.247-.327-.651-.648-1.308-.968-1.982L48,184.685v-5.246c12.2-16.749,57.436-78.8,74.179-101.126,19.015-25.354,31.765-28.772,41.729-28.772,23.113,0,47.41,28.439,54.806,39.374L223.468,96h25.064l4.754-7.085C260.14,78.7,284.92,49.541,308.092,49.541c9.964,0,22.714,3.418,41.729,28.773C366.563,100.637,411.8,162.69,424,179.439v5.246l-40.941,85.976c-.314.66-.635,1.317-.959,1.962-17.451,34.78-54.357,57.253-94.023,57.253Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M304.429,112.851l-10.073,11.394c-.233.265-24.313,26.43-58.356,26.43-34.158,0-58.166-26.219-58.356-26.43l-10.073-11.394L83.93,179.539l44.393,89.547,11.457-1.637a680.122,680.122,0,0,1,192.44,0l11.457,1.637,44.393-89.547Zm20.815,121.373a711.9,711.9,0,0,0-178.488,0L124.07,188.461,164.912,155.9c13.575,11.028,38.644,26.778,71.088,26.778s57.513-15.75,71.088-26.778l40.842,32.564Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M342.77,383.422h0v32h0a110.961,110.961,0,0,0,107-82.1l-30.92-8.285A78.9,78.9,0,0,1,342.77,383.422Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M480.679,341.605c-16.325,60.868-71.962,105.817-137.909,105.817h0v32h0c80.729,0,148.837-55.024,168.82-129.534Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-volume-high" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M145.373,120H16V392H145.373l104,104H288V16H249.373ZM128,360H48V152h80Zm128,97.373-96-96V150.627l96-96Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M408,256a88.1,88.1,0,0,0-88-88v32a56,56,0,0,1,0,112v32A88.1,88.1,0,0,0,408,256Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M320,57.445V89.722C401.307,101.4,464,171.512,464,256S401.307,410.6,320,422.278v32.277C419.005,442.66,496,358.158,496,256S419.005,69.34,320,57.445Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-volume-low" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M320,168v32a56,56,0,0,1,0,112v32a88,88,0,0,0,0-176Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M145.373,120H16V392H145.373l104,104H288V16H249.373ZM128,360H48V152h80Zm128,97.373-96-96V150.627l96-96Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-volume-off" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="490.51 187.313 467.882 164.687 403.598 228.971 339.313 164.687 316.686 187.313 380.971 251.598 316.686 315.883 339.313 338.51 403.598 274.226 467.882 338.51 490.51 315.883 426.225 251.598 490.51 187.313"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M145.373,120H16V392H145.373l104,104H288V16H249.373ZM128,360H48V152h80Zm128,97.373-96-96V150.627l96-96Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-walk" viewBox="0 0 512 512">
        <circle
          cx="309.912"
          cy="82.088"
          r="34.088"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M322,143.462l-60.585-20.64L183.8,151.048A24.073,24.073,0,0,0,168,173.6V232h32V179.207l48.811-17.749L158.622,440h33.613l50.082-155.811,7.871,2.568L288,356.079V440h32V354.04a24.068,24.068,0,0,0-2.931-11.493l-37.56-68.861,28.949-88.715,19.27,34.684A24.011,24.011,0,0,0,348.707,232H400V200H353.414Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-wallet" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M489.972,119.059a23.839,23.839,0,0,0-17-7.059H456V72a24.027,24.027,0,0,0-24-24H86.627A70.628,70.628,0,0,0,16,118.627V393.373A70.628,70.628,0,0,0,86.627,464h385.4a24.047,24.047,0,0,0,24-23.923l.944-303.995A23.837,23.837,0,0,0,489.972,119.059ZM464.053,432H86.627A38.627,38.627,0,0,1,48,393.373V118.627A38.627,38.627,0,0,1,86.627,80H424v32H88v32H464.947Z"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="392"
          y="264"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-wallpaper" viewBox="0 0 512 512">
        <rect
          width="40"
          height="40"
          x="344"
          y="112"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="72 72 224 72 224 40 40 40 40 224 72 224 72 72"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="288 40 288 72 440 72 440 224 472 224 472 40 288 40"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="72 288 40 288 40 472 224 472 224 440 72 440 72 288"
          className="ci-primary"
        />
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="280.5 308.873 189.5 217.873 104 303.373 104 348.627 189.5 263.128 334.372 408 379.627 408 303.127 331.5 375.231 259.396 440 324.165 440 440 288 440 288 472 472 472 472 312 375.231 214.143 280.5 308.873"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-warning" viewBox="0 0 512 512">
        <rect
          width="32"
          height="176"
          x="240"
          y="176"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="32"
          height="32"
          x="240"
          y="384"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M274.014,16H237.986L16,445.174V496H496V445.174ZM464,464H48V452.959L256,50.826,464,452.959Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-watch" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M349.279,16H162.721L137.949,148.116a159.7,159.7,0,0,0,0,215.768L162.721,496H349.279l24.772-132.116a159.7,159.7,0,0,0,0-215.768Zm-160,32H322.721l13,69.311a159.752,159.752,0,0,0-159.434,0ZM322.721,464H189.279l-13-69.311a159.752,159.752,0,0,0,159.434,0ZM256,384A128,128,0,1,1,384,256,128.145,128.145,0,0,1,256,384Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-wc" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M132,139.824A61.912,61.912,0,1,0,70.088,77.912,61.981,61.981,0,0,0,132,139.824ZM132,48a29.912,29.912,0,1,1-29.912,29.912A29.947,29.947,0,0,1,132,48Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M176,152H88a48.053,48.053,0,0,0-48,48V352H72V496H192V352h32V200A48.053,48.053,0,0,0,176,152Zm16,168H160V464H104V320H72V200a16.019,16.019,0,0,1,16-16h88a16.019,16.019,0,0,1,16,16Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M370.088,139.824a61.912,61.912,0,1,0-61.912-61.912A61.981,61.981,0,0,0,370.088,139.824Zm0-91.824a29.912,29.912,0,1,1-29.912,29.912A29.947,29.947,0,0,1,370.088,48Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M425.759,193.354a61.586,61.586,0,0,0-115.833-1.392L248,357.1V400h64v96H416V400h64V349.3ZM448,368H384v96H344V368H280v-5.1l59.889-159.7a29.585,29.585,0,0,1,55.645.669L448,354.7Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-weightlifitng" viewBox="0 0 512 512">
        <circle
          cx="256"
          cy="156"
          r="36"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M400,16V72H112V16H16V160h96V104h25.278l7.524,90.289,79.2,39.6V336H144.864l-7.413,133.426H169.5L175.136,368H336.864L342.5,469.426h32.05L367.136,336H288V233.889l79.2-39.6L374.722,104H400v56h96V16ZM80,72v56H48V48H80ZM336.8,173.71l-80.8,40.4-80.8-40.4L169.389,104H342.611ZM464,128H432V48h32Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-wheelchair" viewBox="0 0 512 512">
        <circle
          cx="221.912"
          cy="66.088"
          r="34.088"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M460.12,360.478l-47.943,11.985L393,282.971A24.126,24.126,0,0,0,369.533,264H280.828l-6.462-56H384V176H270.674l-4.134-35.826a24,24,0,0,0-26.593-21.091l-39.736,4.585L220.1,296h142.97l24.758,115.537,80.057-20.015Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M224,448a120,120,0,0,1-45.248-231.135l-3.779-32.75C115.143,204.558,72,261.334,72,328c0,83.813,68.187,152,152,152a152.06,152.06,0,0,0,130.044-73.378L344,360C328,408,282.6,448,224,448Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-wifi-signal-0" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M237.778,480h36.444L504,151.842V124.4l-.215-.15a432.019,432.019,0,0,0-495.57,0L8,124.4v27.438ZM256,78.128a397.867,397.867,0,0,1,216.144,63.419L256,450.232,39.856,141.547A397.867,397.867,0,0,1,256,78.128Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-wifi-signal-1" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M237.778,480h36.444L504,151.842V124.4l-.215-.15a432.019,432.019,0,0,0-495.57,0L8,124.4v27.438ZM178.867,340.075a158.219,158.219,0,0,1,154.266,0L256,450.232ZM256,78.128a397.867,397.867,0,0,1,216.144,63.419L351.561,313.758a190.142,190.142,0,0,0-191.122,0L39.856,141.547A397.867,397.867,0,0,1,256,78.128Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-wifi-signal-2" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M503.785,124.254a432.019,432.019,0,0,0-495.57,0L8,124.4v27.438L86.881,264.5h0L237.778,480h36.444l150.9-215.5h0L504,151.842V124.4ZM189.824,355.724l75.96-117.392a240.089,240.089,0,0,1,43.276,5.686l-95.22,146Zm-19.809-28.291L131.75,272.784a238.218,238.218,0,0,1,94.9-32.873Zm63.606,90.838L340.994,253.632a239.338,239.338,0,0,1,39.256,19.152L256,450.232ZM398.639,246.523a272.034,272.034,0,0,0-285.278,0l-73.5-104.976a400.039,400.039,0,0,1,432.288,0Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-wifi-signal-3" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M503.785,124.254a432.019,432.019,0,0,0-495.57,0L8,124.4v27.438L41,198.964h0L237.778,480h36.444L471.005,198.964h0l33-47.122V124.4ZM189.87,355.789,315.491,163.662a317.213,317.213,0,0,1,42.184,10.981L213.968,390.2ZM170.1,327.553l-26.453-37.778L233.17,158.932q11.354-.8,22.83-.8,12.2,0,24.276.918Zm-46.064-65.786L85.788,207.145a317.977,317.977,0,0,1,104.534-42.258ZM233.669,418.341l154.47-231.7a320.459,320.459,0,0,1,38.073,20.509L256,450.232Zm210.91-237.427a351.947,351.947,0,0,0-377.158,0L39.856,141.547a400.039,400.039,0,0,1,432.288,0Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-wifi-signal-4" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M503.785,124.254a432.019,432.019,0,0,0-495.57,0L8,124.4v27.437L237.778,480h36.444L504,151.841V124.4ZM403.327,106.166,213.968,390.2,189.892,355.82,362.877,92.583A395.92,395.92,0,0,1,403.327,106.166ZM286.4,79.278a400.017,400.017,0,0,1,43.232,5.631l-159.49,242.7-26.536-37.9ZM123.963,261.664l-22.8-32.563,97.97-146.955A402.727,402.727,0,0,1,248.457,78.2ZM154.714,91.085,81.461,200.965l-41.6-59.418A398.09,398.09,0,0,1,154.714,91.085ZM256,450.232,233.669,418.34,432.984,119.368a401.8,401.8,0,0,1,39.16,22.179Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-wifi-signal-off" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M503.785,124.254A431.821,431.821,0,0,0,171.308,54.526L192.9,83.09A402.723,402.723,0,0,1,256,78.128a397.867,397.867,0,0,1,216.144,63.419L359.092,303l20.278,26.832L504,151.842V124.4Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M82.542,16V37.9l25.874,34.237a431.346,431.346,0,0,0-100.2,52.117L8,124.4v27.438L237.778,480h36.444l68.5-97.829L404.564,464H427.55V441.342L106.1,16Zm239.9,339.34L256,450.232,39.856,141.547a398.932,398.932,0,0,1,88.759-42.683Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-window-maximize" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M472,48H40.335a24.027,24.027,0,0,0-24,24V456a24.027,24.027,0,0,0,24,24H472a24.027,24.027,0,0,0,24-24V72A24.027,24.027,0,0,0,472,48Zm-8,32v71.981L48.335,151.49V80ZM48.335,448V183.49L464,183.981V448Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-window-minimize" viewBox="0 0 512 512">
        <rect
          width="416"
          height="32"
          x="48"
          y="448"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-window-restore" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M352,153H40.247a24.028,24.028,0,0,0-24,24V458a24.028,24.028,0,0,0,24,24H352a24.028,24.028,0,0,0,24-24V177A24.028,24.028,0,0,0,352,153Zm-8,32v45.22H48.247V185ZM48.247,450V262.22H344V450Z"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M472,32H152a24.028,24.028,0,0,0-24,24v65h32V64H464V339.143H408v32h64a24.028,24.028,0,0,0,24-24V56A24.028,24.028,0,0,0,472,32Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-window" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M424,440V48H88V440H48v32H464V440ZM120,80H240V200H120Zm0,152H240V376H120ZM392,440H120V408H392Zm0-64H272V232H392Zm0-176H272V80H392Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-wrap-text" viewBox="0 0 512 512">
        <rect
          width="160"
          height="32"
          x="16"
          y="232"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <rect
          width="392"
          height="32"
          x="16"
          y="392"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M408,72H16v32H408c30.878,0,56,28.71,56,64s-25.122,64-56,64H344.8V162.772L210,249l134.8,83.785V264H408c48.523,0,88-43.065,88-96S456.523,72,408,72ZM312.8,275.217,270,248.609,312.8,221.228Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-x-circle" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="348.071 141.302 260.308 229.065 172.545 141.302 149.917 163.929 237.681 251.692 149.917 339.456 172.545 362.083 260.308 274.32 348.071 362.083 370.699 339.456 282.935 251.692 370.699 163.929 348.071 141.302"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M425.706,86.294A240,240,0,0,0,86.294,425.706,240,240,0,0,0,425.706,86.294ZM256,464C141.309,464,48,370.691,48,256S141.309,48,256,48s208,93.309,208,208S370.691,464,256,464Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-x" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-yen" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="396.641 97.81 371.359 78.19 256.413 226.312 148.938 78.587 123.062 97.413 238.438 256 152.471 256 152.471 288 240 288 240 322.823 152.471 322.823 152.471 354.823 240 354.823 240 432 272 432 272 354.823 359.529 354.823 359.529 322.823 272 322.823 272 288 359.529 288 359.529 256 273.879 256 396.641 97.81"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-zoom-in" viewBox="0 0 512 512">
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="208 96 176 96 176 176 96 176 96 208 176 208 176 288 208 288 208 208 288 208 288 176 208 176 208 96"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M479.6,400.4l-81.084-81.084-62.368-25.767A175.008,175.008,0,0,0,368,192.687c0-97.047-78.953-176-176-176S16,95.64,16,192.687s78.953,176,176,176a175.028,175.028,0,0,0,101.619-32.378l25.7,62.2L400.4,479.6a56,56,0,0,0,79.2-79.2ZM48,192.687c0-79.4,64.6-144,144-144s144,64.6,144,144-64.6,144-144,144S48,272.088,48,192.687ZM456.971,456.971a24.029,24.029,0,0,1-33.942,0L346.457,380.4l-23.894-57.835L380.4,346.457l76.573,76.572A24.029,24.029,0,0,1,456.971,456.971Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-zoom-out" viewBox="0 0 512 512">
        <rect
          width="192"
          height="32"
          x="96.344"
          y="175.313"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        />
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"
          className="ci-primary"
        />
      </symbol>
      <symbol id="cil-zoom" viewBox="0 0 512 512">
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"
          className="ci-primary"
        />
      </symbol>
    </defs>
  </svg>
);

export default SVGSprite;