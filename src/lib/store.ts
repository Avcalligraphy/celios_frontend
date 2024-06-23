// lib/store.ts
import { create } from "zustand";

// fetch our desk
interface ItemAttributes {
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Item {
  id: number;
  attributes: ItemAttributes;
}

interface StoreState {
  data: Item[];
  setData: (newData: Item[]) => void;
}

const useStore = create<StoreState>((set) => ({
  data: [],
  setData: (newData) => set({ data: newData }),
}));

const fetchData = async () => {
  const res = await fetch(`https://jmwrx18b-1337.asse.devtunnels.ms/api/our-desks`);
  const result = await res.json();
  useStore.getState().setData(result.data);
};

// fetch blog report
interface ItemAttributesReport {
  title: string;
  description: any;
  file: any;
  document: any;
  our_desks: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}


interface ItemReport {
  id: number;
  attributes: ItemAttributesReport;
}

interface StoreStateReport {
  dataReport: ItemReport[];
  setDataReport: (newDataReport: ItemReport[]) => void;
}

const useStoreReport = create<StoreStateReport>((set) => ({
  dataReport: [],
  setDataReport: (newDataReport) => set({ dataReport: newDataReport }),
}));

const fetchDataReport = async () => {
  const res = await fetch(`https://jmwrx18b-1337.asse.devtunnels.ms/api/blog-reports?populate=*`);
  const result = await res.json();
  useStoreReport.getState().setDataReport(result.data);
};



// fetch blog report id

interface ItemAttributesReportId {
  // Tambahkan atribut lain sesuai kebutuhan
  title: string;
  description: any[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ItemReportId {
  id: number;
  attributes: ItemAttributesReportId;
}

interface StoreStateReportId {
  dataReportId: ItemReportId | null;
  setDataReportId: (newDataReportId: ItemReportId) => void;
}

const useStoreReportId = create<StoreStateReportId>((set) => ({
  dataReportId: null,
  setDataReportId: (newDataReportId) => set({ dataReportId: newDataReportId }),
}));

const fetchDataReportId = async (id:string | null) => {
  const res = await fetch(`https://jmwrx18b-1337.asse.devtunnels.ms/api/blog-reports/${id}`);
  const result = await res.json();
  useStoreReportId.getState().setDataReportId(result.data);
};
// fetch recent news
interface ItemAttributesNews {
  title: string;
  link: string;
  titleIcon: string;
  image: any;
  icon: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}


interface ItemNews {
  id: number;
  attributes: ItemAttributesNews;
}

interface StoreStateNews {
  dataNews: ItemNews[];
  setDataNews: (newDataNews: ItemNews[]) => void;
}

const useStoreNews = create<StoreStateNews>((set) => ({
  dataNews: [],
  setDataNews: (newDataNews) => set({ dataNews: newDataNews }),
}));

const fetchDataNews = async () => {
  const res = await fetch(`https://jmwrx18b-1337.asse.devtunnels.ms/api/recent-news?populate=*`);
  const result = await res.json();
  useStoreNews.getState().setDataNews(result.data);
};


// fetch social media

interface ItemAttributesIconSocial {
  url: string;
}
interface ItemIconSocial {
  id: number;
  attributes: ItemAttributesIconSocial;
}
interface ItemDataSocial {
  data: ItemIconSocial;
}

interface ItemAttributesSocial {
  title: string;
  link: string;
  titleIcon: string;
  image: any;
  icon: ItemDataSocial;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}


interface ItemSocial {
  id: number;
  attributes: ItemAttributesSocial;
}

interface StoreStateSocial {
  dataSocial: ItemSocial[];
  setDataSocial: (newDataSocial: ItemNews[]) => void;
}

const useStoreSocial = create<StoreStateSocial>((set) => ({
  dataSocial: [],
  setDataSocial: (newDataSocial) => set({ dataSocial: newDataSocial }),
}));

const fetchDataSocial = async () => {
  const res = await fetch("https://jmwrx18b-1337.asse.devtunnels.ms/api/social-medias?populate=*");
  const result = await res.json();
  useStoreSocial.getState().setDataSocial(result.data);
};


// fetch op ed
interface ItemAttributesOpEd {
  title: string;
  link: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}


interface ItemOpEd {
  id: number;
  attributes: ItemAttributesOpEd;
}

interface StoreStateOpEd {
  dataOpEd: ItemOpEd[];
  setDataOpEd: (newDataOpEd: ItemOpEd[]) => void;
}

const useStoreOpEd = create<StoreStateOpEd>((set) => ({
  dataOpEd: [],
  setDataOpEd: (newDataOpEd) => set({ dataOpEd: newDataOpEd }),
}));

const fetchDataOpEd = async () => {
  const res = await fetch("https://jmwrx18b-1337.asse.devtunnels.ms/api/op-eds");
  const result = await res.json();
  useStoreOpEd.getState().setDataOpEd(result.data);
};


// fetch media comentaries
interface ItemAttributesMedia {
  title: string;
  link: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}


interface ItemMedia {
  id: number;
  attributes: ItemAttributesMedia;
}

interface StoreStateMedia {
  dataMedia: ItemMedia[];
  setDataMedia: (newDataMedia: ItemMedia[]) => void;
}

const useStoreMedia = create<StoreStateMedia>((set) => ({
  dataMedia: [],
  setDataMedia: (newDataMedia) => set({ dataMedia: newDataMedia }),
}));

const fetchDataMedia = async () => {
  const res = await fetch("https://jmwrx18b-1337.asse.devtunnels.ms/api/media-comentars");
  const result = await res.json();
  useStoreMedia.getState().setDataMedia(result.data);
};


// fetch about us header
interface ItemAttributesAbout {
  description: string;
  image: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}


interface ItemAbout {
  id: number;
  attributes: ItemAttributesAbout;
}

interface StoreStateAbout {
  dataAbout: ItemAbout[];
  setDataAbout: (newDataAbout: ItemAbout[]) => void;
}

const useStoreAbout = create<StoreStateAbout>((set) => ({
  dataAbout: [],
  setDataAbout: (newDataAbout) => set({ dataAbout: newDataAbout }),
}));

const fetchDataAbout = async () => {
  const res = await fetch("https://jmwrx18b-1337.asse.devtunnels.ms/api/about-uses?populate=*");
  const result = await res.json();
  useStoreAbout.getState().setDataAbout(result.data);
};


// fetch our team
interface ItemAttributesOurTeam {
  name: string;
  position: string;
  category_teams: any;
  image: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}


interface ItemOurTeam {
  id: number;
  attributes: ItemAttributesOurTeam;
}

interface StoreStateOurTeam {
  dataOurTeam: ItemOurTeam[];
  setDataOurTeam: (newDataOurTeam: ItemOurTeam[]) => void;
}

const useStoreOurTeam = create<StoreStateOurTeam>((set) => ({
  dataOurTeam: [],
  setDataOurTeam: (newDataOurTeam) => set({ dataOurTeam: newDataOurTeam }),
}));

const fetchDataOurTeam = async () => {
  const res = await fetch("https://jmwrx18b-1337.asse.devtunnels.ms/api/our-teams?populate=*");
  const result = await res.json();
  useStoreOurTeam.getState().setDataOurTeam(result.data);
};


// fetch publish house
interface ItemAttributesPublish {
  title: string;
  penulis: string;
  penerbit: string;
  isbn: string;
  cover: string;
  halaman: string;
  berat: string;
  ukuran: string;
  linkTokped: string;
  linkShoppe: string;
  image: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}


interface ItemPublish {
  id: number;
  attributes: ItemAttributesPublish;
}

interface StoreStatePublish {
  dataPublish: ItemPublish[];
  setDataPublish: (newDataAbout: ItemPublish[]) => void;
}

const useStorePubllish = create<StoreStatePublish>((set) => ({
  dataPublish: [],
  setDataPublish: (newDataPublish) => set({ dataPublish: newDataPublish }),
}));

const fetchDataPublish = async () => {
  const res = await fetch(
    "https://jmwrx18b-1337.asse.devtunnels.ms/api/publish-houses?populate=*"
  );
  const result = await res.json();
  useStorePubllish.getState().setDataPublish(result.data);
};


// fetch trainings
interface ItemAttributesTraining {
  title: string;
  description: any[];
  image: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}


interface ItemTraining {
  id: number;
  attributes: ItemAttributesTraining;
}

interface StoreStateTraining {
  dataTraining: ItemTraining[];
  setDataTraining: (newDataTraining: ItemTraining[]) => void;
}

const useStoreTraining = create<StoreStateTraining>((set) => ({
  dataTraining: [],
  setDataTraining: (newDataReport) => set({ dataTraining: newDataReport }),
}));

const fetchDataTraining = async () => {
  const res = await fetch("https://jmwrx18b-1337.asse.devtunnels.ms/api/trainings?populate=*");
  const result = await res.json();
  useStoreTraining.getState().setDataTraining(result.data);
};

// fetch data china article 
interface ItemAttributesChinaArticle {
  title: string;
  link: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ItemChinaArticle {
  id: number;
  attributes: ItemAttributesChinaArticle;
}

interface StoreStateChinaArticle {
  dataChinaArticle: ItemChinaArticle[];
  setDataChinaArticle: (newDataChinaArticle: ItemChinaArticle[]) => void;
}

const useStoreChinaArticle = create<StoreStateChinaArticle>((set) => ({
  dataChinaArticle: [],
  setDataChinaArticle: (newDataChinaArticle) => set({ dataChinaArticle: newDataChinaArticle }),
}));

const fetchDataChinaArticle = async () => {
  const res = await fetch("https://jmwrx18b-1337.asse.devtunnels.ms/api/china-articles");
  const result = await res.json();
  useStoreChinaArticle.getState().setDataChinaArticle(result.data);
};

// fetch data china media 
interface ItemAttributesChinaMedia {
  title: string;
  link: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ItemChinaMedia {
  id: number;
  attributes: ItemAttributesChinaMedia;
}

interface StoreStateChinaMedia {
  dataChinaMedia: ItemChinaMedia[];
  setDataChinaMedia: (newDataChinaMedia: ItemChinaMedia[]) => void;
}

const useStoreChinaMedia = create<StoreStateChinaMedia>((set) => ({
  dataChinaMedia: [],
  setDataChinaMedia: (newDataChinaMedia) =>
    set({ dataChinaMedia: newDataChinaMedia }),
}));

const fetchDataChinaMedia = async () => {
  const res = await fetch("https://jmwrx18b-1337.asse.devtunnels.ms/api/china-medias");
  const result = await res.json();
  useStoreChinaMedia.getState().setDataChinaMedia(result.data);
};


// fetch china monthly brief
interface ItemAttributesChinaBrief {
  title: string;
  description: any[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}


interface ItemChinaBrief {
  id: number;
  attributes: ItemAttributesChinaBrief;
}

interface StoreStateChinaBrief {
  dataChinaBrief: ItemChinaBrief[];
  setDataChinaBrief: (newDataChinaBrief: ItemChinaBrief[]) => void;
}

const useStoreChinaBrief = create<StoreStateChinaBrief>((set) => ({
  dataChinaBrief: [],
  setDataChinaBrief: (newDataChinaBrief) => set({ dataChinaBrief: newDataChinaBrief }),
}));

const fetchDataChinaBrief = async () => {
  const res = await fetch("https://jmwrx18b-1337.asse.devtunnels.ms/api/china-monthly-briefs");
  const result = await res.json();
  useStoreChinaBrief.getState().setDataChinaBrief(result.data);
};

// fetch china brief id

interface ItemAttributesChinaBriefId {
  // Tambahkan atribut lain sesuai kebutuhan
  title: string;
  description: any[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ItemChinaBriefId {
  id: number;
  attributes: ItemAttributesChinaBriefId;
}

interface StoreStateChinaBriefId {
  dataChinaBriefId: ItemChinaBriefId | null;
  setDataChinaBriefId: (newDataChinaBriefId: ItemChinaBriefId) => void;
}

const useStoreChinaBriefId = create<StoreStateChinaBriefId>((set) => ({
  dataChinaBriefId: null,
  setDataChinaBriefId: (newDataChinaBriefId) => set({ dataChinaBriefId: newDataChinaBriefId }),
}));

const fetchDataChinaBriefId = async (id:string | null) => {
  const res = await fetch(
    `https://jmwrx18b-1337.asse.devtunnels.ms/api/china-monthly-briefs/${id}`
  );
  const result = await res.json();
  useStoreChinaBriefId.getState().setDataChinaBriefId(result.data);
};


// fetch china report brief
interface ItemAttributesChinaReportBrief {
  title: string;
  description: string
  image: any
  file: any
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}


interface ItemChinaReportBrief {
  id: number;
  attributes: ItemAttributesChinaReportBrief;
}

interface StoreStateReportChinaBrief {
  dataChinaReportBrief: ItemChinaReportBrief[];
  setDataChinaReportBrief: (newDataChinaReportBrief: ItemChinaReportBrief[]) => void;
}

const useStoreChinaReportBrief = create<StoreStateReportChinaBrief>((set) => ({
  dataChinaReportBrief: [],
  setDataChinaReportBrief: (newDataChinaReportBrief) =>
    set({ dataChinaReportBrief: newDataChinaReportBrief }),
}));

const fetchDataChinaReportBrief = async () => {
  const res = await fetch("https://jmwrx18b-1337.asse.devtunnels.ms/api/report-brief-books?populate=*");
  const result = await res.json();
  useStoreChinaReportBrief.getState().setDataChinaReportBrief(result.data);
};


// fetch china Event
interface ItemAttributesChinaEvent {
  image: any
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}


interface ItemChinaEvent {
  id: number;
  attributes: ItemAttributesChinaEvent;
}

interface StoreStateChinaEvent {
  dataChinaEvent: ItemChinaEvent[];
  setDataChinaEvent: (newDataChinaEvent: ItemChinaEvent[]) => void;
}

const useStoreChinaEvent = create<StoreStateChinaEvent>((set) => ({
  dataChinaEvent: [],
  setDataChinaEvent: (newDataChinaEvent) => set({ dataChinaEvent: newDataChinaEvent }),
}));

const fetchDataChinaEvent = async () => {
  const res = await fetch("https://jmwrx18b-1337.asse.devtunnels.ms/api/china-events?populate=*");
  const result = await res.json();
  useStoreChinaEvent.getState().setDataChinaEvent(result.data);
};


// fetch data china library 
interface ItemAttributesChinaLibrary {
  title: string;
  link: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ItemChinaLibrary {
  id: number;
  attributes: ItemAttributesChinaLibrary;
}

interface StoreStateChinaLibrary {
  dataChinaLibrary: ItemChinaLibrary[];
  setDataChinaLibrary: (newDataChinaLibrary: ItemChinaLibrary[]) => void;
}

const useStoreChinaLibrary = create<StoreStateChinaLibrary>((set) => ({
  dataChinaLibrary: [],
  setDataChinaLibrary: (newDataChinaLibrary) => set({ dataChinaLibrary: newDataChinaLibrary }),
}));

const fetchDataChinaLibrary = async () => {
  const res = await fetch("https://jmwrx18b-1337.asse.devtunnels.ms/api/china-libraries");
  const result = await res.json();
  useStoreChinaLibrary.getState().setDataChinaLibrary(result.data);
};



// fetch data index category transition 
interface ItemAttributesIndexTransition {
  title: string;
  value: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ItemIndexTransition {
  id: number;
  attributes: ItemAttributesIndexTransition;
}

interface StoreStateIndexTransition {
  dataIndexTransition: ItemIndexTransition[];
  setDataIndexTransition: (newDataIndexTransition: ItemIndexTransition[]) => void;
}

const useStoreIndexTransition = create<StoreStateIndexTransition>((set) => ({
  dataIndexTransition: [],
  setDataIndexTransition: (newDataIndexTransition) => set({ dataIndexTransition: newDataIndexTransition }),
}));

const fetchDataIndexTransition = async () => {
  const res = await fetch(
    "https://jmwrx18b-1337.asse.devtunnels.ms/api/index-category-transitions"
  );
  const result = await res.json();
  useStoreIndexTransition.getState().setDataIndexTransition(result.data);
};


// fetch data index category 
interface ItemAttributesIndexCategory {
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ItemIndexCategory {
  id: number;
  attributes: ItemAttributesIndexCategory;
}

interface StoreStateIndexCategory {
  dataIndexCategory: ItemIndexCategory[];
  setDataIndexCategory: (newDataIndexCategory: ItemIndexCategory[]) => void;
}

const useStoreIndexCategory = create<StoreStateIndexCategory>((set) => ({
  dataIndexCategory: [],
  setDataIndexCategory: (newDataIndexCategory) => set({ dataIndexCategory: newDataIndexCategory }),
}));

const fetchDataIndexCategory = async () => {
  const res = await fetch("https://jmwrx18b-1337.asse.devtunnels.ms/api/index-categories");
  const result = await res.json();
  useStoreIndexCategory.getState().setDataIndexCategory(result.data);
};

// fetch data index radar 
interface ItemAttributesIndexRadar {
  CEI: string;
  CEV: string;
  ER: string;
  ETRI: string;
  GC: string;
  PCC: string;
  WLI: string;
  provinceArea: string;
  totalPopulation: string;
  index_category: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ItemIndexRadar {
  id: number;
  attributes: ItemAttributesIndexRadar;
}

interface StoreStateIndexRadar {
  dataIndexRadar: ItemIndexRadar[];
  setDataIndexRadar: (newDataIndexRadar: ItemIndexRadar[]) => void;
}

const useStoreIndexRadar = create<StoreStateIndexRadar>((set) => ({
  dataIndexRadar: [],
  setDataIndexRadar: (newDataIndexRadar) => set({ dataIndexRadar: newDataIndexRadar }),
}));

const fetchDataIndexRadar = async () => {
  const res = await fetch("https://jmwrx18b-1337.asse.devtunnels.ms/api/index-radars?populate=*");
  const result = await res.json();
  useStoreIndexRadar.getState().setDataIndexRadar(result.data);
};


// fetch data clean Energy 
interface ItemAttributesCleanEnergy {
  indicator: string;
  skor: string;
  retataNasional: string;
  index_categories: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ItemCleanEnergy {
  id: number;
  attributes: ItemAttributesCleanEnergy;
}

interface StoreStateCleanEnergy {
  dataCleanEnergy: ItemCleanEnergy[];
  setDataCleanEnergy: (newDataCleanEnergy: ItemCleanEnergy[]) => void;
}

const useStoreCleanEnergy = create<StoreStateCleanEnergy>((set) => ({
  dataCleanEnergy: [],
  setDataCleanEnergy: (newDataCleanEnergy) => set({ dataCleanEnergy: newDataCleanEnergy }),
}));

const fetchDataCleanEnergy = async () => {
  const res = await fetch(
    "https://jmwrx18b-1337.asse.devtunnels.ms/api/clean-energies?populate=*"
  );
  const result = await res.json();
  useStoreCleanEnergy.getState().setDataCleanEnergy(result.data);
};


// fetch data economic resilience 
interface ItemAttributesEconomicResilience {
  indicator: string;
  skor: string;
  retataNasional: string;
  index_categories: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ItemEconomicResilience {
  id: number;
  attributes: ItemAttributesEconomicResilience;
}

interface StoreStateEconomicResilience {
  dataEconomicResilience: ItemEconomicResilience[];
  setDataEconomicResilience: (newDataEconomicResilience: ItemEconomicResilience[]) => void;
}

const useStoreEconomicResilience = create<StoreStateEconomicResilience>((set) => ({
  dataEconomicResilience: [],
  setDataEconomicResilience: (newDataEconomicResilience) => set({ dataEconomicResilience: newDataEconomicResilience }),
}));

const fetchDataEconomicResilience = async () => {
  const res = await fetch(
    "https://jmwrx18b-1337.asse.devtunnels.ms/api/economic-resiliences?populate=*"
  );
  const result = await res.json();
  useStoreEconomicResilience.getState().setDataEconomicResilience(result.data);
};


// fetch data goverment capacity 
interface ItemAttributesGovermentCapacity {
  indicator: string;
  skor: string;
  retataNasional: string;
  index_categories: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ItemGovermentCapacity {
  id: number;
  attributes: ItemAttributesGovermentCapacity;
}

interface StoreStateGovermentCapacity {
  dataGovermentCapacity: ItemGovermentCapacity[];
  setDataGovermentCapacity: (newDataGovermentCapacity: ItemGovermentCapacity[]) => void;
}

const useStoreGovermentCapacity = create<StoreStateGovermentCapacity>((set) => ({
  dataGovermentCapacity: [],
  setDataGovermentCapacity: (newDataGovermentCapacity) => set({ dataGovermentCapacity: newDataGovermentCapacity }),
}));

const fetchDataGovermentCapacity = async () => {
  const res = await fetch(
    "https://jmwrx18b-1337.asse.devtunnels.ms/api/goverment-capacities?populate=*"
  );
  const result = await res.json();
  useStoreGovermentCapacity.getState().setDataGovermentCapacity(result.data);
};



// fetch data climate vulnerability
interface ItemAttributesClimateVulnerability {
  indicator: string;
  value: string;
  index_categories: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ItemClimateVulnerability {
  id: number;
  attributes: ItemAttributesClimateVulnerability;
}

interface StoreStateClimateVulnerability {
  dataClimateVulnerability: ItemClimateVulnerability[];
  setDataClimateVulnerability: (newDataClimateVulnerability: ItemClimateVulnerability[]) => void;
}

const useStoreClimateVulnerability = create<StoreStateClimateVulnerability>((set) => ({
  dataClimateVulnerability: [],
  setDataClimateVulnerability: (newDataClimateVulnerability) => set({ dataClimateVulnerability: newDataClimateVulnerability }),
}));

const fetchDataClimateVulnerability = async () => {
  const res = await fetch(
    "https://jmwrx18b-1337.asse.devtunnels.ms/api/climate-vulnerabilities?populate=*"
  );
  const result = await res.json();
  useStoreClimateVulnerability.getState().setDataClimateVulnerability(result.data);
};


// fetch data top city
interface ItemAttributesTopCities {
  city: string;
  value: string;
  index_categories: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ItemTopCities {
  id: number;
  attributes: ItemAttributesTopCities;
}

interface StoreStateTopCities {
  dataTopCities: ItemTopCities[];
  setDataTopCities: (newDataTopCities: ItemTopCities[]) => void;
}

const useStoreTopCities = create<StoreStateTopCities>((set) => ({
  dataTopCities: [],
  setDataTopCities: (newDataTopCities) => set({ dataTopCities: newDataTopCities }),
}));

const fetchDataTopCities = async () => {
  const res = await fetch(
    "https://jmwrx18b-1337.asse.devtunnels.ms/api/top-cities?populate=*"
  );
  const result = await res.json();
  useStoreTopCities.getState().setDataTopCities(result.data);
};


// fetch data bottom city
interface ItemAttributesBottomCities {
  city: string;
  value: string;
  index_categories: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ItemBottomCities {
  id: number;
  attributes: ItemAttributesBottomCities;
}

interface StoreStateBottomCities {
  dataBottomCities: ItemBottomCities[];
  setDataBottomCities: (newDataBottomCities: ItemBottomCities[]) => void;
}

const useStoreBottomCities = create<StoreStateBottomCities>((set) => ({
  dataBottomCities: [],
  setDataBottomCities: (newDataBottomCities) => set({ dataBottomCities: newDataBottomCities }),
}));

const fetchDataBottomCities = async () => {
  const res = await fetch(
    "https://jmwrx18b-1337.asse.devtunnels.ms/api/bottom-cities?populate=*"
  );
  const result = await res.json();
  useStoreBottomCities.getState().setDataBottomCities(result.data);
};


// fetch data downloadReport energy transition
interface ItemAttributesDownloadEnergyTransition {
  downloadReport: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ItemDownloadEnergyTransition {
  id: number;
  attributes: ItemAttributesDownloadEnergyTransition;
}

interface StoreStateDownloadEnergyTransition {
  dataDownloadEnergyTransition: ItemDownloadEnergyTransition[];
  setDataDownloadEnergyTransition: (newDataDownloadEnergyTransition: ItemDownloadEnergyTransition[]) => void;
}

const useStoreDownloadEnergyTransition = create<StoreStateDownloadEnergyTransition>((set) => ({
  dataDownloadEnergyTransition: [],
  setDataDownloadEnergyTransition: (newDataDownloadEnergyTransition) => set({ dataDownloadEnergyTransition: newDataDownloadEnergyTransition }),
}));

const fetchDataDownloadEnergyTransition = async () => {
  const res = await fetch(
    "https://jmwrx18b-1337.asse.devtunnels.ms/api/report-energy-transitions?populate=*"
  );
  const result = await res.json();
  useStoreDownloadEnergyTransition.getState().setDataDownloadEnergyTransition(result.data);
};
export {
  useStore,
  fetchData,
  fetchDataReport,
  useStoreReport,
  useStoreNews,
  fetchDataNews,
  useStoreSocial,
  fetchDataSocial,
  useStoreOpEd,
  fetchDataOpEd,
  useStoreMedia,
  fetchDataMedia,
  useStoreAbout,
  fetchDataAbout,
  useStoreOurTeam,
  fetchDataOurTeam,
  useStoreReportId,
  fetchDataReportId,
  useStorePubllish,
  fetchDataPublish,
  useStoreTraining,
  fetchDataTraining,
  useStoreChinaArticle,
  fetchDataChinaArticle,
  useStoreChinaMedia,
  fetchDataChinaMedia,
  useStoreChinaBrief,
  fetchDataChinaBrief,
  useStoreChinaReportBrief,
  fetchDataChinaReportBrief,
  useStoreChinaEvent,
  fetchDataChinaEvent,
  useStoreChinaLibrary,
  fetchDataChinaLibrary,
  useStoreChinaBriefId,
  fetchDataChinaBriefId,
  useStoreIndexTransition,
  fetchDataIndexTransition,
  useStoreIndexCategory,
  fetchDataIndexCategory,
  useStoreIndexRadar,
  fetchDataIndexRadar,
  useStoreCleanEnergy,
  fetchDataCleanEnergy,
  useStoreEconomicResilience,
  fetchDataEconomicResilience,
  useStoreGovermentCapacity,
  fetchDataGovermentCapacity,
  useStoreClimateVulnerability,
  fetchDataClimateVulnerability,
  useStoreTopCities,
  fetchDataTopCities,
  useStoreBottomCities,
  fetchDataBottomCities,
  useStoreDownloadEnergyTransition,
  fetchDataDownloadEnergyTransition
};
