import HomeIcon from '@mui/icons-material/Home';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

const moduleList = {
  main: [
    ["profile", <HomeIcon/>]
  ],
  dataWarehouse: [
    ["Metadata", <ContentPasteSearchIcon/>]
    , ["Data Dependency", <AccountTreeIcon/>]
  ]
}

export const moduleName = {
  main: "Main",
  dataWarehouse: "Data Warehouse"
}

export default moduleList
