import Styles from "../../styles/sass/scientific.module.scss";
import { TbMath } from "react-icons/tb";
const Scientific = (scientificOpers: any, scientific: boolean): JSX.Element => {
  return scientific ? (
    <div className={Styles.main_right}>
      <div className={Styles.header}>
        <TbMath />
        <p>Scientific</p>
      </div>
      <div className={Styles.empty}></div>
      <div className={Styles.buttons}>
        <button
          className={Styles.pow2}
          onClick={() => {
            scientificOpers("pow");
          }}
        >
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50.000000 50.000000"
          >
            <g transform="translate(0.000000,50.000000) scale(0.020080,-0.019455)">
              <path
                d="M1670 2114 c-52 -14 -98 -30 -102 -37 -4 -7 -8 -36 -8 -64 l0 -53 40
0 c35 0 42 4 65 40 32 51 70 70 139 70 72 0 114 -33 123 -97 12 -89 -9 -130
-136 -275 -65 -74 -137 -159 -160 -188 -47 -60 -94 -146 -87 -159 9 -14 155
-20 344 -14 l183 6 -3 85 c-4 101 -14 110 -64 55 l-35 -38 -117 -3 c-64 -2
-127 0 -140 5 -24 9 -29 4 232 292 100 110 116 142 116 230 0 46 -4 56 -41 95
-73 80 -178 95 -349 50z"
              />
              <path
                d="M723 1540 c-35 -8 -50 -17 -101 -64 -56 -51 -76 -84 -62 -101 20 -24
40 -18 86 25 46 42 69 48 97 27 22 -16 93 -293 84 -328 -8 -32 -191 -247 -222
-261 -18 -8 -31 -7 -55 5 -17 9 -37 14 -45 11 -27 -11 -58 -120 -43 -149 8
-14 19 -16 57 -11 79 11 114 33 181 114 139 168 153 183 160 175 4 -4 17 -48
29 -97 28 -115 44 -151 74 -171 33 -21 116 -21 161 0 49 23 128 112 124 139
-5 35 -34 29 -87 -18 -29 -26 -58 -46 -65 -46 -31 0 -52 45 -94 200 -36 133
-36 149 -4 200 36 57 162 191 195 209 23 12 28 11 53 -8 25 -20 28 -20 45 -5
22 19 39 74 39 122 0 32 0 32 -50 32 -93 0 -125 -23 -247 -178 -42 -54 -79
-101 -83 -105 -4 -5 -15 27 -25 70 -39 178 -96 239 -202 213z"
              />
            </g>
          </svg>
        </button>
        <button
          className={Styles.sqr2}
          onClick={() => {
            scientificOpers("sqrt");
          }}
        >
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50.000000 50.000000"
          >
            <g transform="translate(0.000000,50.000000) scale(0.015873,-0.017794)">
              <path
                d="M885 2294 c-11 -3 -37 -10 -57 -15 -45 -12 -62 -39 -53 -85 8 -46 30
-44 101 11 48 38 65 45 102 45 61 0 102 -40 102 -102 0 -56 -16 -80 -141 -216
-105 -115 -179 -213 -179 -237 0 -21 20 -23 238 -31 l202 -7 0 72 c0 84 -13
97 -61 57 -29 -25 -37 -26 -140 -26 -60 0 -109 3 -109 6 0 3 62 70 138 150 75
79 145 158 155 176 22 43 22 95 -3 135 -34 56 -62 67 -174 70 -56 1 -110 -1
-121 -3z"
              />
              <path
                d="M1861 2241 l-63 -6 -28 -95 c-308 -1052 -393 -1336 -399 -1342 -5 -6
-133 260 -267 559 l-36 82 -47 -19 c-108 -43 -221 -103 -227 -122 -12 -38 11
-43 87 -19 39 12 73 21 75 18 2 -2 66 -136 143 -298 222 -472 217 -463 268
-457 28 3 29 7 111 278 46 151 151 505 233 785 83 281 155 514 160 520 6 6
205 12 532 15 l522 5 3 53 3 52 -503 -2 c-277 -1 -532 -4 -567 -7z"
              />
              <path
                d="M2180 1594 c-40 -17 -105 -77 -125 -115 -13 -24 -12 -28 6 -45 19
-17 21 -17 62 24 53 52 95 57 122 15 14 -21 85 -276 85 -305 0 -11 -154 -191
-198 -230 -41 -37 -75 -48 -87 -28 -3 6 -17 10 -30 10 -35 0 -59 -42 -60 -104
l0 -51 56 0 c79 0 118 30 235 175 53 66 98 119 99 118 2 -2 15 -46 30 -98 35
-122 58 -166 96 -186 66 -34 172 6 242 90 43 52 45 61 16 76 -22 12 -27 10
-89 -48 -65 -61 -92 -32 -140 149 -41 155 -40 179 10 245 21 29 68 82 102 118
67 70 95 81 129 50 10 -9 25 -14 34 -10 21 8 44 64 47 117 l3 44 -40 3 c-70 6
-106 -12 -181 -91 -38 -40 -88 -97 -112 -125 -49 -59 -72 -66 -72 -24 0 39
-27 129 -53 175 -36 65 -109 85 -187 51z"
              />
            </g>
          </svg>
        </button>
        <button
          className={Styles.powY}
          onClick={() => {
            scientificOpers("powY");
          }}
        >
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50.000000 40.000000"
          >
            <g transform="translate(0.000000,50.000000) scale(0.019011,-0.016181)">
              <path
                d="M1636 2308 c-47 -13 -139 -98 -134 -124 5 -28 22 -27 63 6 44 35 80
39 95 9 21 -38 42 -122 80 -314 l37 -190 -25 -33 c-14 -18 -50 -51 -80 -73
-65 -46 -111 -52 -135 -16 -22 32 -49 12 -66 -51 -17 -62 -6 -82 45 -82 92 0
215 83 333 224 148 178 338 505 344 592 l2 39 -80 3 c-98 3 -123 -9 -82 -39
21 -16 27 -29 27 -59 0 -72 -69 -227 -151 -340 -31 -43 -32 -43 -41 -21 -4 13
-19 93 -33 179 -29 177 -61 264 -106 288 -32 16 -39 16 -93 2z"
              />
              <path
                d="M623 1873 c-39 -22 -80 -58 -116 -102 -26 -32 -27 -35 -11 -52 23
-26 28 -25 69 20 48 51 81 60 110 29 23 -24 55 -126 76 -238 10 -58 10 -70 -6
-100 -47 -91 -197 -250 -236 -250 -11 0 -28 6 -39 12 -31 20 -53 -1 -69 -64
-19 -74 -13 -88 43 -88 89 0 128 30 258 198 44 56 83 102 88 102 5 0 12 -17
15 -37 39 -233 99 -294 238 -247 66 22 153 117 140 151 -9 22 -33 14 -82 -27
-66 -56 -93 -54 -119 8 -22 51 -42 124 -67 241 l-15 74 37 46 c57 69 174 191
196 202 14 8 22 6 36 -10 23 -26 57 -27 71 -2 5 11 15 42 21 71 13 61 2 80
-46 80 -83 0 -136 -41 -262 -203 l-77 -97 -17 83 c-18 92 -48 157 -86 193 -32
30 -103 33 -150 7z"
              />
            </g>
          </svg>
        </button>
        <button
          className={Styles.sqrX}
          onClick={() => {
            scientificOpers("0");
          }}
        >
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50.000000 50.000000"
          >
            <g transform="translate(0.000000,50.000000) scale(0.015625,-0.017668)">
              <path
                d="M585 2296 c-35 -15 -105 -89 -105 -111 0 -23 29 -18 62 10 46 39 73
33 92 -17 28 -73 67 -259 73 -343 l5 -80 -35 -41 c-20 -22 -56 -51 -81 -64
l-45 -24 -24 22 c-31 29 -44 28 -60 -5 -24 -47 -30 -85 -15 -94 29 -19 103 -9
153 20 123 70 354 370 462 598 40 84 40 113 -1 124 -36 10 -126 0 -126 -14 0
-6 12 -23 26 -38 24 -26 25 -30 14 -66 -19 -59 -101 -211 -136 -251 l-32 -37
-10 55 c-6 30 -20 104 -32 165 -24 126 -50 180 -93 195 -38 13 -55 12 -92 -4z"
              />
              <path
                d="M2178 2130 c-295 -3 -539 -7 -541 -10 -3 -3 -96 -320 -207 -705 -110
-385 -203 -708 -206 -717 -3 -10 -9 -18 -15 -18 -12 0 -64 106 -194 395 -60
132 -109 241 -109 241 -2 3 -240 -104 -258 -115 -20 -12 -24 -56 -8 -66 6 -4
42 6 81 20 39 15 71 26 73 24 2 -2 40 -85 86 -184 143 -311 266 -559 283 -573
8 -7 28 -12 43 -10 32 3 -12 -133 342 1076 83 283 153 516 156 519 8 8 508 22
799 22 l257 1 0 54 c0 51 -2 55 -22 53 -13 -1 -265 -4 -560 -7z"
              />
              <path
                d="M2553 1489 c-43 -12 -131 -95 -210 -196 -35 -46 -68 -83 -73 -83 -5
0 -16 33 -25 73 -37 165 -81 214 -182 204 -60 -6 -120 -48 -169 -118 -27 -40
-28 -42 -9 -55 29 -21 39 -18 74 26 81 101 126 53 177 -192 17 -83 17 -89 1
-124 -20 -41 -175 -222 -208 -242 -19 -12 -27 -11 -61 4 -34 15 -41 15 -53 3
-15 -15 -46 -134 -37 -143 11 -11 103 -6 135 8 40 16 124 104 204 213 l61 82
12 -52 c27 -115 60 -204 85 -227 36 -33 118 -39 171 -12 39 20 86 65 117 111
12 18 14 28 5 38 -17 21 -36 15 -82 -27 -74 -68 -100 -53 -140 82 -46 150 -57
217 -41 248 35 67 206 250 235 250 4 0 15 -9 25 -20 25 -28 51 -25 63 8 19 50
33 125 25 132 -15 14 -67 19 -100 9z"
              />
            </g>
          </svg>
        </button>
        <button className={Styles.mod} onClick={() => {}}>
          mod
        </button>
        <button className={Styles.pi} onClick={() => {}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M7 20v-16"></path>
            <path d="M17 4v16"></path>
            <path d="M20 4h-16"></path>
          </svg>{" "}
        </button>
        <button className={Styles.b2} onClick={() => {}}>
          Base2
        </button>
      </div>
    </div>
  ) : (
    <div
      className={Styles.none1}
      style={{ width: "100%", height: "100%" }}
    ></div>
  );
};

export default Scientific;
