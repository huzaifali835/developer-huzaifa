import React from 'react'

const GraphicDesign = () => {
  return (
    <div className='skills__content' >
        <h2 className="skills__title"></h2>

        <div className="skills__box">

            <div className="skills__group">
                
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">Adobe Illustrator</h3>
                        <span className="skills__level">Expert</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">Adobe Photoshop</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

            </div>

            <div className="skills__group">
                
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">Adobe After Effect</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">Adobe Premier Pro</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

            </div>
            
        </div>

    </div>
  )
}

export default GraphicDesign
