import React from 'react'
import { CheckCircle } from 'phosphor-react'

const PackageItem = ({pkg}) => {
  return (
    <div className="package-card">
        <div className="package-item-left">
            <span className="package-title">{pkg.title}</span>
            <div className="package-details">
                <div className="testing">
                    <CheckCircle size={14} />
                    <span>{pkg.seatingType}</span>
                </div>
                <div>
                    <CheckCircle size={14} />
                    <span>{pkg.placement}</span>
                </div>
            </div>
        </div>
        <div className="package-item-right">
            <span>{pkg.currency}</span>
            <span>{pkg.price}</span>
        </div>
    </div>
  )
}

export default PackageItem