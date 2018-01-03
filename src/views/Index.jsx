import React from 'react'
import { Link } from 'react-router'
import Layout from 'components/Layout'

export default () => (
  <Layout>
    <h1>Index</h1>
    <Link to='/other'>Other</Link>
  </Layout>
)
