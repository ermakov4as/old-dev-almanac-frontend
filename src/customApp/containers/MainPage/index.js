import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import notification from '../../../components/notification';
//import Box from '../../../components/utility/box';
import HelperText from '../../../components/utility/helper-text';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import PageHeader from '../../../components/utility/pageHeader';
import IntlMessages from '../../../components/utility/intlMessages';
import Scrollbars from '../../../components/utility/customScrollBar';
import Button from '../../../components/uielements/button';
import invoiceActions from '../../redux/invoice/actions';
import CardWrapper, { Box, StatusTag } from './invoice.style';
import TableWrapper from '../../../containers/Tables/antTables/antTable.style';


class Invoices extends Component {
  state = {
    selected: [],
  };
  /*constructor(props) {
    super(props);
    this.state = {
        users: [],
    };
    this.props = {
        requestAddress: 'http://127.0.0.1:8081/sciences/',
    };
  };
  loadData() {
    fetch(this.props.requestAddress)
      .then(results => { return results//.json() })
      .then(data => {
         this.setState({users: data });
    }).catch(() => {
         alert('Ошибка!');
    });
  };

  componentDidMount() {
    this.loadData();
    const { initialInvoices, initData } = this.props;
    if (!initialInvoices) {
      initData();
    };
  };*/

  columns = [
    {
      title: 'Дисциплина',
      dataIndex: 'name',
      rowKey: 'name',
      width: '50%',
      render: text => <span>{text}</span>,
    },
    {
      title: 'Status',
      dataIndex: 'orderStatus',
      rowKey: 'orderStatus',
      width: '20%',
      render: (text, orderStatus) => {
        let className;
        if (
          text === 'developing' ||
          text === 'Developing' ||
          text === 'DEVELOPING'
        ) {
          className = 'developing';
        } else if (
          text === 'ready' ||
          text === 'Ready' ||
          text === 'READY'
        ) {
          className = 'ready';
        } else if (
          text === 'pending' ||
          text === 'Pending' ||
          text === 'PENDING'
        ) {
          className = 'pending';
        }
        return <StatusTag className={className}>{text}</StatusTag>;
      },
    },
    {
      title: '',
      dataIndex: 'view',
      rowKey: 'view',
      width: '10%',
      render: (text, invoice) => (
        <div className="isoInvoiceBtnView">
          <Link to={`${this.props.match.path}/${invoice.id}`}>
            <Button color="primary" className="invoiceViewBtn">
              Edit
            </Button>
          </Link>{' '}
          <Button
            className="invoiceDltBtn"
            // icon="delete"
            onClick={() => {
              notification('error', '1 invoice deleted');
              this.props.deleteInvoice([invoice.key]);
              this.setState({ selected: [] });
            }}
          >
            <i className="ion-android-delete" />
          </Button>
        </div>
      ),
    },
  ];
  getnewInvoiceId = () => new Date().getTime();
  render() {
    const { match, invoices, deleteInvoice } = this.props;
    const { selected } = this.state;
    const rowSelection = {
      hideDefaultSelections: true,
      selectedRowKeys: selected,
      onChange: selected => this.setState({ selected }),
      selections: [
        {
          key: 'all-data',
          text: 'Select All Invoices',
          onSelect: () =>
            this.setState({
              selected: this.props.invoices.map(invoice => invoice.key),
            }),
        },
        {
          key: 'no-data',
          text: 'Unselect all',
          onSelect: () => this.setState({ selected: [] }),
        },
        {
          key: 'delete-selected',
          text: 'Delete selected',
          onSelect: changableRowKeys => {
            if (selected.length > 0) {
              deleteInvoice(selected);
              this.setState({ selected: [] });
              notification('error', `${selected.length} invoices deleted`);
            }
          },
        },
      ],
      onSelection: selected => this.setState({ selected }),
    };
    return (
      <LayoutWrapper>
        <PageHeader>
          <IntlMessages id="Список ваших дисциплин" />
        </PageHeader>
        <Box>
          <div className="isoInvoiceTableBtn">
            <Link to={`${match.path}/${this.getnewInvoiceId()}`}>
              <Button type="primary" className="mateAddInvoiceBtn">
                Создать новую
              </Button>
            </Link>
          </div>

          <CardWrapper title="Invoices">
            {invoices.length === 0 ? (
              <HelperText text="No Invoices" />
            ) : (
              <div className="isoInvoiceTable">
                <Scrollbars style={{ width: '100%' }}>
                  <TableWrapper
                    rowSelection={rowSelection}
                    dataSource={invoices}
                    columns={this.columns}
                    pagination={false}
                    className="invoiceListTable"
                  />
                </Scrollbars>
              </div>
            )};
          </CardWrapper>
        </Box>
      </LayoutWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.Invoices,
  };
}
export default connect(
  mapStateToProps,
  invoiceActions
)(Invoices);