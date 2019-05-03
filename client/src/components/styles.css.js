const MainCont = {
    fontSize: '16px',
}

const Header = {
    gridColumn: '1/9',
    textAlign: 'center',
}

const AppMainCont = {
    gridColumn: '2/3',
    display: 'inline-block',
    position: 'fixed',
    borderStyle: 'Outset',
    borderRadius: '1px'
}

const PhyMainCont = {
    display: 'inline-block',
    gridColumn: '1'
}

const AppCont = {
    display: 'grid',
    gridTemplateColumns: '200px 100px 100px',
    gridColumnGap: '50px',
    textAlign: 'center'
};

const AppRow1 = {
    display: 'inline-block',
    gridColumn: '1',
};
const AppRow2 = {
    display: 'inline-block',
    gridColumn: '2',
};
const AppRow3 = {
    display: 'inline-block',
    gridColumn: '3',
}

const PhyCont = {
    textAlign: 'center',
    paddingTop: '5px',
    paddingBottom: '5px'
}

export default {
    MainCont,
    PhyMainCont,
    AppMainCont,
    Header,
    PhyCont,
    AppCont,
    AppRow1,
    AppRow2,
    AppRow3,

}