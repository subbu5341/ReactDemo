import React, { Component } from 'react';
import { VectorMap } from  'react-jvectormap';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import LinkWithTooltip from './tooltip';
import $ from 'jquery';

class home extends Component {
  constructor() {
    super()
    this.state = {
      wasClicked: false
    }
  }
  regionClick(event, code) {
    $('.top-metrics').show();
    var name=(code);
    alert(name);
        $('#side-metrics').hide();
        $('.key-metrics').hide();
        if ($('#map-container').hasClass('col-sm-10')) {
            $('#map-container').removeClass('col-sm-10').addClass('col-sm-8 map-display')
            $('.nav-metrics').addClass('nav-metrics-modify')
            $('.nav-metrics').css('padding-left', '0px')
            $('.metrics-size').css('font-size','16px');
            $('.ibox-title h5').css('font-size','11px')
            $('.ibox').css('margin-right','10px')
            $('.tool').css('right', '0px');
            document.getElementsByClassName("region-metrics")[0].style.width="60.5%";

        }
        document.getElementById("mySidenav").style.width = "33%";

    }

    regionOver(e, code, region) {
      console.log(region)
         $('.tool').show();
    }
      regionOut(e, code, region) {
           $('.tool').hide();
    }
    closeNav() {
      $('.top-metrics').hide();
    	$('#side-metrics').show();
    	$('.key-metrics').show();

    	if($('#map-container').hasClass('col-sm-8')) {
    		$('#map-container').removeClass('col-sm-8 map-display').addClass('col-sm-10')
    		$('.nav-metrics').removeClass('nav-metrics-modify')
    		$('.nav-metrics').css('padding-left', '70px')
    		$('.ibox-title h5').css('font-size', '14px')
    		$('.ibox-content').css('padding-left', '20px')
    		$('.ibox').css('margin-right','0px')
    		$('.metrics-size').css('font-size','18px');
    		$('.tool').css('right', '215px');
    		//$('.tool').css('top', '112px');
            //$('.tool').css('left', '-110px');
            document.getElementsByClassName("region-metrics")[0].style.width="90%";
    	}
        document.getElementById("mySidenav").style.width = "0";
    }
    routeChange() {
      this.props.history.push('/budgetAllocation')
    }
  render() {
    const tooltip = (
    <Tooltip id="tooltip">
      <strong>Note:</strong>Optimizer will run with default constraints.
    </Tooltip>
    );
      return(
                  <div style={{backgroundColor:'#F3F3F4'}}>
                    <div className="row wrapper border-bottom white-bg page-heading fixed-header">
                      <div className="col-sm-4">
                      <h2>Global Optimization Module</h2>
                      </div>
                      <div className="col-sm-3 top-metrics">
                          <h2>
                            Countries covered: <span className="metrics-span" >5</span>
                          </h2>
                        </div>
                        <div className="col-sm-3 top-metrics">
                          <h2>
                            Brands covered: <span className="metrics-span">13</span>
                          </h2>
                        </div>
                    </div>

                    <div className="row justify-content-center region-metrics">
        							<div className="key-metrics">
        								<span>Key Metrics</span><br/>
        								<span>for 2017</span>
        							</div>
      							<div className="nav-metrics">
      								<div className="ibox float-e-margins">
      									<div className="ibox-content budget-metrics">
      										<div className="heading-icon">
                              <img src={require("../img/dollar-coin-stack.png")} width="25" height="22" alt="dollar-coin-stack"/>
      											<h1 className="no-margins metrics-size">$17,915.57 MM</h1>
      										</div>
      										<h5 className="metrics-heading">Net Revenue</h5>
      									</div>
      								</div>
      							</div>
      							<div className="nav-metrics">
      								<div className="ibox float-e-margins">
      									<div className="ibox-content budget-metrics">
      										<div className="heading-icon">
                            <img src={require("../img/dollar.png")} width="30" height="22" alt="dollar"/>
      											<h1 className="no-margins metrics-size">$
      												2,405.13 MM</h1>
      										</div>
      										<h5 className="metrics-heading" style={{paddingLeft: 45}}>MACO</h5>
      									</div>
      								</div>
      							</div>
      							<div className="nav-metrics">
      								<div className="ibox float-e-margins">
      									<div className="ibox-content budget-metrics">
      										<div className="heading-icon">
                            <img src={require("../img/beer.png")} width="25" height="22" alt="beer"/>
      											<h1 className="no-margins metrics-size">
      												11.49 MM-HL</h1>
      										</div>
      										<h5 className="metrics-heading">Volume</h5>
      									</div>
      								</div>
      							</div>
      							<div className="nav-metrics">
      								<div className="ibox float-e-margins">
      									<div className="ibox-content budget-metrics">
      										<div className="heading-icon">
                            <img src={require("../img/pie-chart.png")} width="25" height="22" alt="pie-chart"/>
      											<h1 className="no-margins metrics-size">50.86%</h1>
      										</div>
      										<h5 className="metrics-heading">Market Share</h5>
      									</div>
      								</div>
      							</div>
      						</div>
                  <div className="ibox-content" style={{backgroundColor:"#f3f3f4"}}>
                      <div className="row" >
                          <div className="col-sm-2" id="side-metrics" >
                                <div className="ibox float-e-margins">
                                  <div className="ibox-title metrics-heading">
                                    <h5>Countries covered</h5>
                                  </div>
                                  <div className="ibox-content budget-metrics">
                                    <h1 className="text-success font-bold coverage">5</h1>
                                  </div>
                                </div>
                                <div className="ibox float-e-margins">
                                  <div className="ibox-title metrics-heading">
                                    <h5>Brands covered</h5>
                                  </div>
                                  <div className="ibox-content" >
                                    <h1 className="text-success font-bold coverage">13</h1>
                                  </div>
                                </div>
                                <div className="ibox float-e-margins">
                                  <div className="ibox-title metrics-heading">
                                    <h5>Global Coverage</h5>
                                  </div>
                                  <div className="ibox-content" style={{padding: 0}}>
                                    <div className="per-dropdown" style={{paddingTop: 5,position: 'absolute', right: 0,paddingRight: 5}}>
                                      <select id="metric-per" style={{marginRight: 30}}>
                                        <option value="NR">NR</option>
                                        <option value="MACO">MACO</option>
                                        <option value="Volume">Volume</option>
                                        <option value="MS">MS</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="ibox-content" style={{padding: 2}}>
                                    <h3 className="text-success">40%</h3>
                                    <div className="progress progress-mini">
                                      <div style={{width: "40%"}} className="progress-bar"></div>
                                    </div>
                                    <h3 className="text-success">Of Global</h3>
                                  </div>
                                </div>
                          </div>
                          <div className="ibox-content-map">
    											<div className="col-sm-10" id='map-container'>
                          <div className="framework">
      											<h4>Choose Framework:</h4>
      											<select id="framework-name">
      												<option value="Anne-stephen-framework">Anne-stephen-framework</option>
      												<option value="Zone-level-framework" >Zone-level-framework</option>
      											</select>
                            </div>
                              <div style={{width: '100%', height: 300,marginTop: 12}}>
                                  <VectorMap map={'world_mill'}
                                   backgroundColor="#D3D3D3"
                                   ref="map"
                                   containerStyle={{
                                       width: '100%',
                                       height: '100%'
                                   }}
                                 containerClassName="map"
                                 onRegionClick = {()=>this.regionClick()}
                                 onRegionOver = {()=>this.regionOver()}
                                 onRegionOut = {()=>this.regionOut()}
                                            />
                                </div>
                                <div className="ibox float-e-margins tool" style={{zIndex: 1000}}>
            											<div className="ibox-title">
            												<h4 className="countryName">
            												      <span>Canada</span>
            												</h4>
            											</div>
            											<div className="ibox-content " style={{paddingLeft: 0 }}>
            												<table className="hover-table">
            													<thead>
            														<tr>
            															<th>NR</th>
            															<th>MACO</th>
            															<th>MS</th>
            															<th>Vol</th>
            														</tr>
            													</thead>
            													<tbody id="hover-tbody">
            													</tbody>
            												</table>
            											</div>
            										</div>

                          </div>
                          </div>
                                <div id="mySidenav" className="sidenav">
          											<a href="javascript:void(0)" className="closebtn"	onClick={()=>this.closeNav()}>&times;</a>
          											<div>
          												<div className="select-country">Select Countries</div>
          												<ul className="sortable-list connectList agile-list" id="todo">
          													<li className="warning-element" id="task1"
          														style={{height: '30vh',overflowY: "auto",overflowX: "hidden"}}>
          														<table>
          															<thead>
          																<tr>
          																	<th>Country</th>
          																	<th>NR</th>
          																	<th>MACO</th>
          																	<th>MS</th>
          																	<th>Vol</th>
          																</tr>
          															</thead>
          															<tbody id="mapdata-table">
          															</tbody>
          														</table>
          														<div id="side-nav-table">
          															<span><i className="fa fa-plus-circle"
          																aria-hidden="true"
          																style={{marginTop: 150,position: 'absolute', right: 0}}></i></span>
          														</div>
          													</li>
          												</ul>
          											</div>


                                <div>
                                  <div className="select-country">Define Objective</div>
                                  <ul className="sortable-list connectList agile-list" id="todo">
                                    <li className="success-element" id="task1" style={{padding: 0 ,margin: 0}}>
                                    <div className="content-block white-bg ibox" style={{margin: 10}}>
                                        <div className="ibox-content objective">
                                          <div className="maximize-revenue metrics">
                                            <select >
                                              <option value="Max Net Revenue">Max Net
                                                Revenue</option>
                                              <option value="Max MACO">Max MACO</option>
                                            </select>
                                          </div>
                                          <div className="increase-revenue metrics">
                                            <div className="obj-fun-block__label">
                                              <select >
                                                <option value="Inc NR by (%)">Inc NR by (%)</option>
                                                <option value="Inc MACO by (%)">Inc MACO by
                                                  (%)</option>
                                              </select>
                                            </div>
                                            <div className="obj-fun-block__input">

                                              <input type="number" className="form-control" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div>
                                  <div className="select-country">Constraints</div>
                                  <ul className="sortable-list connectList agile-list" id="todo">
                                    <li className="danger-element" id="task1">
                                      <div className="agile-detail">
                                        <span className="side-nav-constraints"> <a style={{display:" inline-block",fontSize: 15,cursor: "default"}}>Constraints:</a>
                                        </span> <span className="side-nav-constraints"> <a
                                          data-toggle="modal" data-target="#constrains"> <i
                                            className="fa fa-eye" aria-hidden="true"
                                            style={{paddingLeft: 10}}></i></a>
                                        </span> <span id="side-nav-constraint"> <a
                                          data-toggle="modal" data-target="#constrains"> <i className="fa fa-pencil fa-fw" style={{width: 5,padding:10}}></i>
                                        </a>
                                        </span> <span className="side-nav-constraints">
                                        <OverlayTrigger placement="top" overlay={tooltip}>
                                          <i className="fa fa-info-circle" style={{paddingLeft:10}} aria-hidden="true"></i>
                                        </OverlayTrigger>

                                        </span>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div id="side-nav-checkbox" style={{textAlign: 'center'}}>
                                  <input type="checkbox" value="true"/><span>Manual Budget Allocation
                                  <LinkWithTooltip tooltip="Note:Media & Trade optimization will run with planned global budget." href="#" id="tooltip-1">
                                          <i className="fa fa-info-circle" style={{paddingLeft:10}} aria-hidden="true"></i>
                                  </LinkWithTooltip></span>
                                </div>
                                </div>
                          <div id="floating-button">
                          <button type='submit' className="fix-button" onClick={()=> this.routeChange()}>
                            Run Optimization <i className="fa fa-pencil fa-fw"></i>
                          </button>
                        </div>
                     </div>
                </div>
                </div>
                  );
          }
}

export default home;
