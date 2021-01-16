
const asyncHandler = require('../middlewares/async');
const Program =require ('../models/programModel');


exports.createProgram = asyncHandler(async (req, res) => {
    const program = new Program({
      buyername: 'Sample',
      gsm: '',      
      image: '/images/sample.jpg',      
      groundyarn: '',
      pileyarn: '',
      totalpick: '',
      totalyarn: '',
      designname: 'demo',
      type: '',
      cminch: '',
      readcount: '',
      ppi: '',
      weftyarn: '',
      fancyyarn: '',
      fancycam: '',
      campile: '',
      piletopile: '',
      cuttingborder: '',
      cuttingborderplain: '',
      cuttingbordertotal: '',
      hemyarn: '',
      pieceweight: '',
      onthetable:'',
      pileratio: '',
      loomno: '',
      shed: '',      
      date: '',      
      totalend: '',     
      design: '0',      
      size: '',
      note:""    
      
    })
  
    const createdProgram = await program.save()
    res.status(201).json(createdProgram)
  })


// @desc      View all Programs
// @route     GET /api/v1/program
// @access    Public
exports.getPrograms = asyncHandler(async (req, res) => {
    const programs = await Program.find({}).sort({createdAt: -1})
    res.status(200).json({ programs });
  });

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
exports.updateProgram = asyncHandler(async (req, res) => {
  const {
      buyername,
      gsm,      
      image,      
      groundyarn,
      pileyarn,
      totalpick,
      totalyarn,
      designname,
      type,
      cminch,
      readcount,
      ppi,
      weftyarn,
      fancyyarn,
      fancycam,
      campile,
      piletopile,
      cuttingborder,
      hemyarn,
      pieceweight,
      onthetable,
      pileratio,
      loomno,
      shed,      
      date,      
      cuttingbordertotal,
      cuttingborderplain,    
      design,
      totalend,      
      size,
      note
  } = req.body

  const program = await Program.findById(req.params.id)

  if (program) {
      program.buyername=buyername,
      program.gsm=gsm,      
      program.image=image,      
      program.groundyarn=groundyarn,
      program.pileyarn=pileyarn ,
      program.totalpick=totalpick,
      program.totalyarn=totalyarn,
      program.designname=designname,
      program.type=type,
      program.cminch=cminch,
      program.readcount=readcount,
      program.ppi=ppi,
      program.weftyarn=weftyarn,
      program.fancyyarn=fancyyarn,
      program.fancycam=fancycam,
      program.campile=campile,
      program.piletopile=piletopile,
      program.cuttingborder=cuttingborder,
      program.hemyarn=hemyarn,
      program.pieceweight=pieceweight,
      program.onthetable=onthetable,
      program.pileratio=pileratio,
      program.loomno=loomno,
      program.shed=shed,      
      program.date=date,      
      program.cuttingborderplain=cuttingborderplain,
      program.cuttingbordertotal=cuttingbordertotal,      
      program.design=design,      
      program.size=size,
      program.totalend=totalend,
      program.note=note
      
    const updatedProgram = await program.save()
    res.json(updatedProgram)
  } else {
    res.status(404)
    throw new Error('Program not found')
  }
})  

// @desc      View single Program
// @route     GET /api/v1/machine/:id
// @access    Public
exports.getProgram = asyncHandler(async (req, res, next) => {
  const program = await Program.findById(req.params.id)
  res.status(200).json({ program });
});

// @desc    Delete a product
// @route   DELETE /api/v1/products/:id
// @access  Private/Admin
exports.deleteProgram = asyncHandler(async (req, res) => {
  const program = await Program.findById(req.params.id)

  if (program) {
    await program.remove()
    res.json({ message: 'Program removed' })
  } else {
    res.status(404)
    throw new Error('Program not found')
  }
})