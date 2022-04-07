import BigNumber from "bignumber.js";

export interface Asset {
  tokenId: string | null;
  tokenAddress: string;
  schemaName?: WyvernSchemaName;
  version?: TokenStandardVersion;
  name?: string;
  decimals?: number;
}

export interface OpenSeaAsset extends Asset {
  assetContract: OpenSeaAssetContract;
  collection: OpenSeaCollection;
  name: string;
  description: string;
  owner: OpenSeaAccount;
  orders: Order[] | null;
  buyOrders: Order[] | null;
  sellOrders: Order[] | null;
  isPresale: boolean;
  image_url: string;
  imagePreviewUrl: string;
  imageUrlOriginal: string;
  imageUrlThumbnail: string;
  openseaLink: string;
  externalLink: string;
  traits: object[];
  numSales: number;
  lastSale: AssetEvent | null;
  backgroundColor: string | null;
  transferFee: BigNumber | string | null;
  transferFeePaymentToken: OpenSeaFungibleToken | null;
}

export interface OpenSeaCollection extends OpenSeaFees {
  name: string;
  slug: string;
  editors: string[];
  hidden: boolean;
  featured: boolean;
  createdDate: Date;
  description: string;
  imageUrl: string;
  largeImageUrl: string;
  featuredImageUrl: string;
  stats: object;
  displayData: object;
  paymentTokens: OpenSeaFungibleToken[];
  payoutAddress?: string;
  traitStats: OpenSeaTraitStats;
  externalLink?: string;
  wikiLink?: string;
}

export interface OpenSeaAssetContract extends OpenSeaFees {
  name: string;
  address: string;
  type: AssetContractType;
  schemaName: WyvernSchemaName;
  sellerFeeBasisPoints: number;
  buyerFeeBasisPoints: number;
  description: string;
  tokenSymbol: string;
  imageUrl: string;
  stats?: object;
  traits?: object[];
  externalLink?: string;
  wikiLink?: string;
}

export interface AssetEvent {
  eventType: AssetEventType;
  eventTimestamp: Date;
  auctionType: AuctionType;
  totalPrice: string;
  transaction: Transaction | null;
  paymentToken: OpenSeaFungibleToken | null;
}

interface OpenSeaAccount {
  address: string;
  config: string;
  profileImgUrl: string;
  user: OpenSeaUser | null;
}
interface OpenSeaUser {
  username: string;
}

interface OpenSeaTraitStats {
  [traitName: string]: NumericalTraitStats | StringTraitStats;
}

interface StringTraitStats {
  [key: string]: number;
}

interface NumericalTraitStats {
  min: number;
  max: number;
}

interface Transaction {
  fromAccount: OpenSeaAccount;
  toAccount: OpenSeaAccount;
  createdDate: Date;
  modifiedDate: Date;
  transactionHash: string;
  transactionIndex: string;
  blockNumber: string;
  blockHash: string;
  timestamp: Date;
}

interface Order extends UnsignedOrder, Partial<ECSignature> {
  createdTime?: BigNumber;
  currentPrice?: BigNumber;
  currentBounty?: BigNumber;
  makerAccount?: OpenSeaAccount;
  takerAccount?: OpenSeaAccount;
  paymentTokenContract?: OpenSeaFungibleToken;
  feeRecipientAccount?: OpenSeaAccount;
  cancelledOrFinalized?: boolean;
  markedInvalid?: boolean;
  asset?: OpenSeaAsset;
  assetBundle?: OpenSeaAssetBundle;
  nonce?: number;
}

interface WyvernOrder {
  exchange: string;
  maker: string;
  taker: string;
  makerRelayerFee: BigNumber;
  takerRelayerFee: BigNumber;
  makerProtocolFee: BigNumber;
  takerProtocolFee: BigNumber;
  feeRecipient: string;
  feeMethod: number;
  side: number;
  saleKind: number;
  target: string;
  howToCall: number;
  calldata: string;
  replacementPattern: string;
  staticTarget: string;
  staticExtradata: string;
  paymentToken: string;
  basePrice: BigNumber;
  extra: BigNumber;
  listingTime: BigNumber;
  expirationTime: BigNumber;
  salt: BigNumber;
}

interface UnhashedOrder extends WyvernOrder {
  feeMethod: FeeMethod;
  side: OrderSide;
  saleKind: SaleKind;
  howToCall: HowToCall;
  quantity: BigNumber;
  makerReferrerFee: BigNumber;
  waitingForBestCounterOrder: boolean;
  englishAuctionReservePrice?: BigNumber;
  metadata: ExchangeMetadata;
}

interface UnsignedOrder extends UnhashedOrder {
  hash?: string;
}

interface OpenSeaAssetBundle {
  maker: OpenSeaAccount;
  assets: OpenSeaAsset[];
  name: string;
  slug: string;
  permalink: string;
  sellOrders: Order[] | null;
  assetContract?: OpenSeaAssetContract;
  description?: string;
  externalLink?: string;
}

interface OpenSeaFees {
  openseaSellerFeeBasisPoints: number;
  openseaBuyerFeeBasisPoints: number;
  devSellerFeeBasisPoints: number;
  devBuyerFeeBasisPoints: number;
}

interface OpenSeaFungibleToken extends Token {
  imageUrl?: string;
  ethPrice?: string;
  usdPrice?: string;
}

interface Token {
  name: string;
  symbol: string;
  decimals: number;
  address: string;
}

interface WyvernBundle {
  assets: WyvernAsset[];
  schemas: WyvernSchemaName[];
  name?: string;
  description?: string;
  external_link?: string;
}

interface WyvernFTAsset {
  id?: string;
  address: string;
  quantity: string;
}

interface WyvernNFTAsset {
  id: string;
  address: string;
}

interface ExchangeMetadataForAsset {
  asset: WyvernAsset;
  schema: WyvernSchemaName;
  referrerAddress?: string;
}

interface ExchangeMetadataForBundle {
  bundle: WyvernBundle;
  referrerAddress?: string;
}

interface ECSignature {
  v: number;
  r: string;
  s: string;
}

declare enum AssetContractType {
  Fungible = "fungible",
  SemiFungible = "semi-fungible",
  NonFungible = "non-fungible",
  Unknown = "unknown",
}

declare enum TokenStandardVersion {
  Unsupported = "unsupported",
  Locked = "locked",
  Enjin = "1155-1.0",
  ERC721v1 = "1.0",
  ERC721v2 = "2.0",
  ERC721v3 = "3.0",
}

declare enum AuctionType {
  Dutch = "dutch",
  English = "english",
  MinPrice = "min_price",
}

declare enum AssetEventType {
  AuctionCreated = "created",
  AuctionSuccessful = "successful",
  AuctionCancelled = "cancelled",
  OfferEntered = "offer_entered",
  BidEntered = "bid_entered",
  BidWithdraw = "bid_withdraw",
  AssetTransfer = "transfer",
  AssetApprove = "approve",
  CompositionCreated = "composition_created",
  Custom = "custom",
  Payout = "payout",
}

declare enum WyvernSchemaName {
  ERC20 = "ERC20",
  ERC721 = "ERC721",
  ERC721v3 = "ERC721v3",
  ERC1155 = "ERC1155",
  LegacyEnjin = "Enjin",
  ENSShortNameAuction = "ENSShortNameAuction",
}

declare enum FeeMethod {
  ProtocolFee = 0,
  SplitFee = 1,
}

declare enum OrderSide {
  Buy = 0,
  Sell = 1,
}

declare enum SaleKind {
  FixedPrice = 0,
  DutchAuction = 1,
}

declare enum HowToCall {
  Call = 0,
  DelegateCall = 1,
  StaticCall = 2,
  Create = 3,
}

declare type ExchangeMetadata =
  | ExchangeMetadataForAsset
  | ExchangeMetadataForBundle;
declare type WyvernAsset = WyvernNFTAsset | WyvernFTAsset;
