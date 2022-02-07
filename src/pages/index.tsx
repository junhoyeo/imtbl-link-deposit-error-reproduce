import dedent from 'dedent';
import React from 'react';
import styled from 'styled-components';

import { ERC721TokenType, Link } from '@imtbl/imx-sdk';

const HomePage = () => {
  const deposit = () => {
    const link = new Link('https://link.ropsten.x.immutable.com');
    link.deposit({
      type: ERC721TokenType.ERC721,
      tokenId: '1',
      tokenAddress: '0xa15b310f70f0eae2fab0bd1c50c88eace94bbbd6',
    });
  }

  return <Container>
    <pre><code>{dedent`
const deposit = () => {
  const link = new Link('https://link.ropsten.x.immutable.com');
  link.deposit({
    type: ERC721TokenType.ERC721,
    tokenId: '1',
    tokenAddress: '0xa15b310f70f0eae2fab0bd1c50c88eace94bbbd6',
  });
}
`}</code></pre>

    <Button onClick={deposit}>Click to PoC Deposit</Button>
  </Container>
};

export default HomePage;

const Container = styled.div``;

const Button = styled.button`
  background-color: lightgray;
  border: 1px solid black;
  padding: 8px 16px;
`
