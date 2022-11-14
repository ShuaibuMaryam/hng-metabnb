import React, {useState} from 'react'
import arrowRight from '../Assets/modals/arrow-right.png'
import metaMask from '../Assets/modals/meta-mask.png'
import walletConnect from '../Assets/modals/wallet-connect.png'
import '../Styles/walletModal.css'


function WalletModal({openWalletModal}) {
  return (
    <div className='connect-wallet-wraper'>

        <div className='overlay'></div>

        <div className='connect-wallet'>

            <div className='connect-header'>
                <h6>Connect Wallet</h6>
                <span onClick={openWalletModal}>x</span>
            </div>

            <div className='connect-options'>
                <span>Choose your preferred wallet:</span>
        
                <div className='connect-option'>
                    <div className='connect-option-icons'>
                        <div><img src={metaMask}/></div>
                        <h6>Metamask</h6>
                    </div>
                    <div>
                        <a href='#'><img src={arrowRight}/></a>
                    </div>
                </div>

                <div className='connect-option'>
                    <div className='connect-option-icons'>
                        <div><img src={walletConnect}/></div>
                        <h6>WalletConnect</h6>
                    </div>
                    <div>
                        <a href='#'><img src={arrowRight}/></a>
                    </div>
                </div>

            </div>
        </div>

    </div>
  )
}

export default WalletModal