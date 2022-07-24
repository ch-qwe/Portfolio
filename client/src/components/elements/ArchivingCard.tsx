import styled from 'styled-components';

const styledProps = {
  yellow: '#ffdd40',
  dark: '#2f313a',
  deg: '-86deg',
  trans: ' all 0.4s ease 0s',
};

const Card = styled.div`
  .team {
    padding: 2em 0 2em 2.5em;
    margin: 0;
  }

  .member {
    margin: 1.5em 0 0.5em;
    padding: 0.6em;
    background: linear-gradient(83deg, ${styledProps.yellow} 0 97%, #fff0 calc(97% + 1px) 100%);
    position: relative;
    list-style: none;
    display: inline-block;
    border: none;
    transform: scale(0.85);
    transition: ${styledProps.trans};
  }

  .member:nth-of-type(even) {
    background: linear-gradient(-83deg, ${styledProps.yellow} 0 97%, #fff0 calc(97% + 1px) 100%);
  }

  .thumb {
    width: 13vmin;
    height: 13vmin;
    float: left;
    margin-right: 1.25em;
    background: linear-gradient(${styledProps.deg}, ${styledProps.dark} 0 50%, ${styledProps.yellow} 0% 100%);
    transform: rotate(-4deg);
    transition: ${styledProps.trans};
    border-radius: 0.25em;
    overflow: hidden;
    margin-left: -3em;
    padding: 0.5em;
  }

  .member:nth-of-type(even) .thumb {
    background: linear-gradient(91deg, ${styledProps.dark} 0 50%, ${styledProps.yellow} 0% 100%);
    float: right;
    margin-left: 2em;
    margin-right: -3em;
    transform: rotate(4deg);
  }

  .thumb img {
    width: 100%;
    height: 100%;
    border-radius: 0.25em;
    filter: grayscale(1);
    background: ${styledProps.dark};
  }

  .member:hover {
    transform: scale(1);
    transition: ${styledProps.trans};
    filter: drop-shadow(0px 20px 10px #0008);
  }

  .member:hover .thumb {
    padding: 0.1em;
    transition: ${styledProps.trans};
    transform: rotate(-1deg);
    ${(styledProps.deg = '-89deg')};
  }

  .member:nth-of-type(even):hover .thumb {
    ${(styledProps.deg = '91deg')};
  }

  .member:hover .thumb img {
    filter: none;
    transition: ${styledProps.trans};
  }

  .description {
    padding-top: 1vmin;
  }

  .description div {
    padding: 0 2em;
    margin-bottom: 1em;
  }

  h3 {
    background: linear-gradient(182deg, #fff0 60%, ${styledProps.dark} 0 100%);
    display: inline;
    transform: rotate(-2deg);
    position: absolute;
    margin: 0;
    margin-top: -2.25em;
    left: 9vmin;
    padding: 0.5em 0.75em;
    color: ${styledProps.yellow};
    border-radius: 0.25em;
    font-size: 2.35em;
    transform-origin: left bottom;
  }

  .member:nth-of-type(even) h3 {
    left: inherit;
    right: 9vmin;
    transform: rotate(2deg);
    transform-origin: right bottom;
    background: linear-gradient(-182deg, #fff0 60%, ${styledProps.dark} 0 100%);
  }

  .member:hover h3 {
    transition: ${styledProps.trans};
    transform: rotate(0deg);
    background: linear-gradient(180deg, #fff0 59%, ${styledProps.dark} 0 100%);
    z-index: 10;
  }

  .co-funder:after {
    content: 'CO-FUNDER';
    font-size: 0.75em;
    position: absolute;
    top: -1.5em;
    background: ${styledProps.yellow};
    right: 4em;
    transform: rotate(3deg);
    padding: 0.35em 0.75em 0.5em;
    border-radius: 0.25em;
    color: ${styledProps.dark};
    font-weight: bold;
  }

  .co-funder:nth-of-type(even):after {
    right: inherit;
    left: 4em;
    transform: rotate(-3deg);
  }

  .description div {
    font-size: 1.1em;
  }

  .description div a {
    display: inline-block;
    margin: 0.5em 0 0 0;
    background: ${styledProps.dark};
    color: ${styledProps.yellow};
    padding: 0.1em 0.5em 0.35em;
    border-radius: 0.5em;
    text-decoration: none;
    transition: ${styledProps.trans};
  }
  .description div a:hover {
    transition: ${styledProps.trans};
    color: ${styledProps.dark};
    background: ${styledProps.yellow};
    font-weight: bold;
  }

  .description div a img {
    float: left;
    width: 22px;
    filter: invert(1);
    border-radius: 0.15em;
    padding: 2px;
    background: #fff;
    margin-right: 2px;
  }
`;

function Component({ children }: { children: any }) {
  return (
    <Card>
      <div className="content">
        <ul className="team">{children}</ul>
      </div>
    </Card>
  );
}

export default Component;
