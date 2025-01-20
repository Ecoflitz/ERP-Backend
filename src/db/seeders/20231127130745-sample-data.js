const db = require('../models');
const Users = db.users;

const HumanResources = db.human_resources;

const Inventory = db.inventory;

const Machinery = db.machinery;

const QualityControl = db.quality_control;

const RawMaterials = db.raw_materials;

const Suppliers = db.suppliers;

const WorkOrders = db.work_orders;

const Organizations = db.organizations;

const HumanResourcesData = [
  {
    employee_name: 'Alexander Fleming',

    role: 'SkilledLabor',

    shift: 'Ernest Rutherford',

    payroll: 22.13,

    // type code here for "relation_one" field
  },

  {
    employee_name: 'Alfred Binet',

    role: 'SkilledLabor',

    shift: 'Noam Chomsky',

    payroll: 53.67,

    // type code here for "relation_one" field
  },

  {
    employee_name: 'Claude Levi-Strauss',

    role: 'ManagerialStaff',

    shift: 'Lynn Margulis',

    payroll: 91.68,

    // type code here for "relation_one" field
  },

  {
    employee_name: 'Tycho Brahe',

    role: 'SkilledLabor',

    shift: 'Max Born',

    payroll: 36.51,

    // type code here for "relation_one" field
  },
];

const InventoryData = [
  {
    product_name: 'Linus Pauling',

    available_quantity: 74.46,

    reserved_quantity: 46.19,

    returned_quantity: 68.52,

    // type code here for "relation_one" field
  },

  {
    product_name: 'Alfred Wegener',

    available_quantity: 97.64,

    reserved_quantity: 65.42,

    returned_quantity: 96.62,

    // type code here for "relation_one" field
  },

  {
    product_name: 'Werner Heisenberg',

    available_quantity: 52.06,

    reserved_quantity: 39.37,

    returned_quantity: 86.32,

    // type code here for "relation_one" field
  },

  {
    product_name: 'George Gaylord Simpson',

    available_quantity: 88.79,

    reserved_quantity: 22.61,

    returned_quantity: 15.27,

    // type code here for "relation_one" field
  },
];

const MachineryData = [
  {
    machine_name: 'Erwin Schrodinger',

    maintenance_schedule: 'Lynn Margulis',

    last_maintenance: new Date(),

    // type code here for "relation_one" field
  },

  {
    machine_name: 'Max Delbruck',

    maintenance_schedule: 'James Watson',

    last_maintenance: new Date(),

    // type code here for "relation_one" field
  },

  {
    machine_name: 'Francis Galton',

    maintenance_schedule: 'Frederick Sanger',

    last_maintenance: new Date(),

    // type code here for "relation_one" field
  },

  {
    machine_name: 'Max Planck',

    maintenance_schedule: 'Max Planck',

    last_maintenance: new Date(),

    // type code here for "relation_one" field
  },
];

const QualityControlData = [
  {
    check_name: 'Edwin Hubble',

    // type code here for "relation_one" field

    passed: true,

    check_date: new Date(),

    // type code here for "relation_one" field
  },

  {
    check_name: 'Frederick Sanger',

    // type code here for "relation_one" field

    passed: true,

    check_date: new Date(),

    // type code here for "relation_one" field
  },

  {
    check_name: 'Charles Lyell',

    // type code here for "relation_one" field

    passed: true,

    check_date: new Date(),

    // type code here for "relation_one" field
  },

  {
    check_name: 'Murray Gell-Mann',

    // type code here for "relation_one" field

    passed: true,

    check_date: new Date(),

    // type code here for "relation_one" field
  },
];

const RawMaterialsData = [
  {
    name: 'Francis Galton',

    quantity: 78.12,

    reorder_level: 98.12,

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    name: 'Max von Laue',

    quantity: 74.95,

    reorder_level: 23.45,

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    name: 'August Kekule',

    quantity: 11.93,

    reorder_level: 96.71,

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    name: 'Pierre Simon de Laplace',

    quantity: 93.42,

    reorder_level: 42.36,

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },
];

const SuppliersData = [
  {
    supplier_name: 'Dmitri Mendeleev',

    contract_terms: 'Trofim Lysenko',

    delivery_schedule: new Date(),

    payment_records: 58.24,

    // type code here for "relation_one" field
  },

  {
    supplier_name: 'Murray Gell-Mann',

    contract_terms: 'Alfred Wegener',

    delivery_schedule: new Date(),

    payment_records: 65.52,

    // type code here for "relation_one" field
  },

  {
    supplier_name: 'Murray Gell-Mann',

    contract_terms: 'Paul Dirac',

    delivery_schedule: new Date(),

    payment_records: 17.42,

    // type code here for "relation_one" field
  },

  {
    supplier_name: 'Alfred Binet',

    contract_terms: 'Thomas Hunt Morgan',

    delivery_schedule: new Date(),

    payment_records: 96.74,

    // type code here for "relation_one" field
  },
];

const WorkOrdersData = [
  {
    order_number: 'Comte de Buffon',

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    start_date: new Date(),

    end_date: new Date(),

    // type code here for "relation_one" field
  },

  {
    order_number: 'Francis Galton',

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    start_date: new Date(),

    end_date: new Date(),

    // type code here for "relation_one" field
  },

  {
    order_number: 'William Bayliss',

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    start_date: new Date(),

    end_date: new Date(),

    // type code here for "relation_one" field
  },

  {
    order_number: 'Charles Sherrington',

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    start_date: new Date(),

    end_date: new Date(),

    // type code here for "relation_one" field
  },
];

const OrganizationsData = [
  {
    name: 'Charles Lyell',
  },

  {
    name: 'Emil Kraepelin',
  },

  {
    name: 'Alexander Fleming',
  },

  {
    name: 'Marcello Malpighi',
  },
];

// Similar logic for "relation_many"

async function associateUserWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User0 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (User0?.setOrganization) {
    await User0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User1 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (User1?.setOrganization) {
    await User1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User2 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (User2?.setOrganization) {
    await User2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User3 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (User3?.setOrganization) {
    await User3.setOrganization(relatedOrganization3);
  }
}

async function associateHumanResourceWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const HumanResource0 = await HumanResources.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (HumanResource0?.setOrganization) {
    await HumanResource0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const HumanResource1 = await HumanResources.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (HumanResource1?.setOrganization) {
    await HumanResource1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const HumanResource2 = await HumanResources.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (HumanResource2?.setOrganization) {
    await HumanResource2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const HumanResource3 = await HumanResources.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (HumanResource3?.setOrganization) {
    await HumanResource3.setOrganization(relatedOrganization3);
  }
}

async function associateInventoryWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Inventory0 = await Inventory.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Inventory0?.setOrganization) {
    await Inventory0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Inventory1 = await Inventory.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Inventory1?.setOrganization) {
    await Inventory1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Inventory2 = await Inventory.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Inventory2?.setOrganization) {
    await Inventory2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Inventory3 = await Inventory.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Inventory3?.setOrganization) {
    await Inventory3.setOrganization(relatedOrganization3);
  }
}

async function associateMachineryWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Machinery0 = await Machinery.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Machinery0?.setOrganization) {
    await Machinery0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Machinery1 = await Machinery.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Machinery1?.setOrganization) {
    await Machinery1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Machinery2 = await Machinery.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Machinery2?.setOrganization) {
    await Machinery2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Machinery3 = await Machinery.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Machinery3?.setOrganization) {
    await Machinery3.setOrganization(relatedOrganization3);
  }
}

async function associateQualityControlWithWork_order() {
  const relatedWork_order0 = await WorkOrders.findOne({
    offset: Math.floor(Math.random() * (await WorkOrders.count())),
  });
  const QualityControl0 = await QualityControl.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (QualityControl0?.setWork_order) {
    await QualityControl0.setWork_order(relatedWork_order0);
  }

  const relatedWork_order1 = await WorkOrders.findOne({
    offset: Math.floor(Math.random() * (await WorkOrders.count())),
  });
  const QualityControl1 = await QualityControl.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (QualityControl1?.setWork_order) {
    await QualityControl1.setWork_order(relatedWork_order1);
  }

  const relatedWork_order2 = await WorkOrders.findOne({
    offset: Math.floor(Math.random() * (await WorkOrders.count())),
  });
  const QualityControl2 = await QualityControl.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (QualityControl2?.setWork_order) {
    await QualityControl2.setWork_order(relatedWork_order2);
  }

  const relatedWork_order3 = await WorkOrders.findOne({
    offset: Math.floor(Math.random() * (await WorkOrders.count())),
  });
  const QualityControl3 = await QualityControl.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (QualityControl3?.setWork_order) {
    await QualityControl3.setWork_order(relatedWork_order3);
  }
}

async function associateQualityControlWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const QualityControl0 = await QualityControl.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (QualityControl0?.setOrganization) {
    await QualityControl0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const QualityControl1 = await QualityControl.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (QualityControl1?.setOrganization) {
    await QualityControl1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const QualityControl2 = await QualityControl.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (QualityControl2?.setOrganization) {
    await QualityControl2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const QualityControl3 = await QualityControl.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (QualityControl3?.setOrganization) {
    await QualityControl3.setOrganization(relatedOrganization3);
  }
}

// Similar logic for "relation_many"

async function associateRawMaterialWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const RawMaterial0 = await RawMaterials.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (RawMaterial0?.setOrganization) {
    await RawMaterial0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const RawMaterial1 = await RawMaterials.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (RawMaterial1?.setOrganization) {
    await RawMaterial1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const RawMaterial2 = await RawMaterials.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (RawMaterial2?.setOrganization) {
    await RawMaterial2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const RawMaterial3 = await RawMaterials.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (RawMaterial3?.setOrganization) {
    await RawMaterial3.setOrganization(relatedOrganization3);
  }
}

async function associateSupplierWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Supplier0 = await Suppliers.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Supplier0?.setOrganization) {
    await Supplier0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Supplier1 = await Suppliers.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Supplier1?.setOrganization) {
    await Supplier1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Supplier2 = await Suppliers.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Supplier2?.setOrganization) {
    await Supplier2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Supplier3 = await Suppliers.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Supplier3?.setOrganization) {
    await Supplier3.setOrganization(relatedOrganization3);
  }
}

// Similar logic for "relation_many"

// Similar logic for "relation_many"

// Similar logic for "relation_many"

async function associateWorkOrderWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const WorkOrder0 = await WorkOrders.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (WorkOrder0?.setOrganization) {
    await WorkOrder0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const WorkOrder1 = await WorkOrders.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (WorkOrder1?.setOrganization) {
    await WorkOrder1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const WorkOrder2 = await WorkOrders.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (WorkOrder2?.setOrganization) {
    await WorkOrder2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const WorkOrder3 = await WorkOrders.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (WorkOrder3?.setOrganization) {
    await WorkOrder3.setOrganization(relatedOrganization3);
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await HumanResources.bulkCreate(HumanResourcesData);

    await Inventory.bulkCreate(InventoryData);

    await Machinery.bulkCreate(MachineryData);

    await QualityControl.bulkCreate(QualityControlData);

    await RawMaterials.bulkCreate(RawMaterialsData);

    await Suppliers.bulkCreate(SuppliersData);

    await WorkOrders.bulkCreate(WorkOrdersData);

    await Organizations.bulkCreate(OrganizationsData);

    await Promise.all([
      // Similar logic for "relation_many"

      await associateUserWithOrganization(),

      await associateHumanResourceWithOrganization(),

      await associateInventoryWithOrganization(),

      await associateMachineryWithOrganization(),

      await associateQualityControlWithWork_order(),

      await associateQualityControlWithOrganization(),

      // Similar logic for "relation_many"

      await associateRawMaterialWithOrganization(),

      await associateSupplierWithOrganization(),

      // Similar logic for "relation_many"

      // Similar logic for "relation_many"

      // Similar logic for "relation_many"

      await associateWorkOrderWithOrganization(),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('human_resources', null, {});

    await queryInterface.bulkDelete('inventory', null, {});

    await queryInterface.bulkDelete('machinery', null, {});

    await queryInterface.bulkDelete('quality_control', null, {});

    await queryInterface.bulkDelete('raw_materials', null, {});

    await queryInterface.bulkDelete('suppliers', null, {});

    await queryInterface.bulkDelete('work_orders', null, {});

    await queryInterface.bulkDelete('organizations', null, {});
  },
};
