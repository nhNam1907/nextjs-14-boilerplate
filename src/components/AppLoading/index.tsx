import './index.scss';

const AppLoading = () => {
  return (
    <div className='app-loading fixed left-0 top-0 flex w-full items-center justify-center'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        viewBox='0 0 100 100'
        preserveAspectRatio='xMidYMid'
        width='160'
        height='160'
        style={{
          shapeRendering: 'auto',
          display: 'block',
          background: 'transparent',
        }}
      >
        <g>
          <g transform='rotate(0 50 50)'>
            <rect fill='#ff6363' height='12' width='6' ry='3.48' rx='3' y='24' x='47'>
              <animate
                repeatCount='indefinite'
                begin='-0.9166666666666666s'
                dur='1s'
                keyTimes='0;1'
                values='1;0'
                attributeName='opacity'
              />
            </rect>
          </g>
          <g transform='rotate(30 50 50)'>
            <rect fill='#ff6363' height='12' width='6' ry='3.48' rx='3' y='24' x='47'>
              <animate
                repeatCount='indefinite'
                begin='-0.8333333333333334s'
                dur='1s'
                keyTimes='0;1'
                values='1;0'
                attributeName='opacity'
              />
            </rect>
          </g>
          <g transform='rotate(60 50 50)'>
            <rect fill='#ff6363' height='12' width='6' ry='3.48' rx='3' y='24' x='47'>
              <animate
                repeatCount='indefinite'
                begin='-0.75s'
                dur='1s'
                keyTimes='0;1'
                values='1;0'
                attributeName='opacity'
              />
            </rect>
          </g>
          <g transform='rotate(90 50 50)'>
            <rect fill='#ff6363' height='12' width='6' ry='3.48' rx='3' y='24' x='47'>
              <animate
                repeatCount='indefinite'
                begin='-0.6666666666666666s'
                dur='1s'
                keyTimes='0;1'
                values='1;0'
                attributeName='opacity'
              />
            </rect>
          </g>
          <g transform='rotate(120 50 50)'>
            <rect fill='#ff6363' height='12' width='6' ry='3.48' rx='3' y='24' x='47'>
              <animate
                repeatCount='indefinite'
                begin='-0.5833333333333334s'
                dur='1s'
                keyTimes='0;1'
                values='1;0'
                attributeName='opacity'
              />
            </rect>
          </g>
          <g transform='rotate(150 50 50)'>
            <rect fill='#ff6363' height='12' width='6' ry='3.48' rx='3' y='24' x='47'>
              <animate
                repeatCount='indefinite'
                begin='-0.5s'
                dur='1s'
                keyTimes='0;1'
                values='1;0'
                attributeName='opacity'
              />
            </rect>
          </g>
          <g transform='rotate(180 50 50)'>
            <rect fill='#ff6363' height='12' width='6' ry='3.48' rx='3' y='24' x='47'>
              <animate
                repeatCount='indefinite'
                begin='-0.4166666666666667s'
                dur='1s'
                keyTimes='0;1'
                values='1;0'
                attributeName='opacity'
              />
            </rect>
          </g>
          <g transform='rotate(210 50 50)'>
            <rect fill='#ff6363' height='12' width='6' ry='3.48' rx='3' y='24' x='47'>
              <animate
                repeatCount='indefinite'
                begin='-0.3333333333333333s'
                dur='1s'
                keyTimes='0;1'
                values='1;0'
                attributeName='opacity'
              />
            </rect>
          </g>
          <g transform='rotate(240 50 50)'>
            <rect fill='#ff6363' height='12' width='6' ry='3.48' rx='3' y='24' x='47'>
              <animate
                repeatCount='indefinite'
                begin='-0.25s'
                dur='1s'
                keyTimes='0;1'
                values='1;0'
                attributeName='opacity'
              />
            </rect>
          </g>
          <g transform='rotate(270 50 50)'>
            <rect fill='#ff6363' height='12' width='6' ry='3.48' rx='3' y='24' x='47'>
              <animate
                repeatCount='indefinite'
                begin='-0.16666666666666666s'
                dur='1s'
                keyTimes='0;1'
                values='1;0'
                attributeName='opacity'
              />
            </rect>
          </g>
          <g transform='rotate(300 50 50)'>
            <rect fill='#ff6363' height='12' width='6' ry='3.48' rx='3' y='24' x='47'>
              <animate
                repeatCount='indefinite'
                begin='-0.08333333333333333s'
                dur='1s'
                keyTimes='0;1'
                values='1;0'
                attributeName='opacity'
              />
            </rect>
          </g>
          <g transform='rotate(330 50 50)'>
            <rect fill='#ff6363' height='12' width='6' ry='3.48' rx='3' y='24' x='47'>
              <animate
                repeatCount='indefinite'
                begin='0s'
                dur='1s'
                keyTimes='0;1'
                values='1;0'
                attributeName='opacity'
              />
            </rect>
          </g>
          <g />
        </g>
      </svg>
    </div>
  );
};

export default AppLoading;
