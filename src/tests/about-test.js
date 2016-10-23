import React from 'react';
import Code from 'code';
import Lab from 'lab';
import sinon from 'sinon';
const lab = exports.lab = Lab.script();

import { shallow, mount, render } from 'enzyme';

const suite = lab.suite;
const test = lab.test;
const expect = Code.expect;

import { Header, About, Project, Team } from '../components.jsx';

suite('Components', () => {

    test('Header: does not throw error without props', (done) => {
        const wrapper = shallow( <Header /> );
        expect(wrapper).to.exist();
        done();
    });

    test('Header: renders props', (done) => {
        const wrapper = render( <Header titleStyle="header-title text-center" subtitleStyle="lead header-subtitle text-center" title="metAleph" subtitle="Touching what you can't see!" /> );
        expect(wrapper.text()).to.contain("Touching what you can't see!");
        done();
    });

    test('About: does not throw error without props', (done) => {
        const wrapper = shallow( <About /> );
        expect(wrapper).to.exist();
        done();
    });

    test('About: renders props', (done) => {
        const wrapper = render( <About titleStyle="section-title text-center" contentStyle="lead section-content text-center" title="About" content="According to Borges: '... the Aleph is a point in space that contains all other points. Anyone who gazes into it can see everything in the universe from every angle simultaneously, without distortion, overlapping or confusion ...' and meta goes for abstraction: an Aleph explaining itself. This is a data - driven startup!" /> );
        expect(wrapper.text()).to.contain("According to Borges: '... the Aleph is a point in space that contains all other points. Anyone who gazes into it can see everything in the universe from every angle simultaneously, without distortion, overlapping or confusion ...' and meta goes for abstraction: an Aleph explaining itself. This is a data - driven startup!");
        done();
    });

    test('Project: does not throw error without props', (done) => {
        const data = [{key: "1", name:"EESE Data", url:"http://www.metaleph.com/eese-data"}];
        const wrapper = shallow( <Project content={data} />);
        expect(wrapper).to.exist();
        done();
    });

    test('Team: does not throw error without props', (done) => {
        const data = [{key: "1", member: "Cristhian Seminario.", field: "Economics.", year: "1988."},
                      {key: "2", member: "Daniel Llatas.", field: "Computer science.", year: "1989."}];
        const wrapper = shallow( <Team content={data} /> );
        expect(wrapper).to.exist();
        done();
    });

});