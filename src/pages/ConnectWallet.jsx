import AuthLayout from "../components/layout/AuthLayout";
import MainLayout from "../components/layout/MainLayout";
import { Metamask, WalletConnet, CoinBase } from "../utils/WalletIcon";

const ConnectWallet = () => {
  return (
    <MainLayout>
      <AuthLayout>
      <div className="lg:w-5/6 mx-auto md:w-5/6 lg:px-0 px-4">
                <h2 className="lg:text-[51px] text-[38px] font-semibold mb-5">Connect wallet</h2>
                <p className="lg:text-[22px] text-[16px] font-normal mb-7 lg:w-3/4">
                  Choose a wallet you want to connect. There are several wallet providers.
                </p>
                <div className="mb-4 lg:w-1/2">
                  <button className="wallet-btn">
                    <div className="flex gap-5 items-center">
                      <Metamask />
                      <p className="text-[22px] font-semibold text-white">Metamask</p>
                    </div>
                  </button>
                </div>
                <div className="mb-4 lg:w-1/2">
                  <button className="wallet-btn">
                    <div className="flex gap-5 items-center">
                      <WalletConnet />
                      <p className="text-[22px] font-semibold text-white">Wallet Connect</p>
                    </div>
                  </button>
                </div>
                <div className="mb-4 lg:w-1/2">
                  <button className="wallet-btn">
                    <div className="flex gap-5 items-center">
                      <CoinBase />
                      <p className="text-[22px] font-semibold text-white">Coinbase</p>
                    </div>
                  </button>
                </div>
            </div>
      </AuthLayout>
    </MainLayout>
  )
}

export default ConnectWallet