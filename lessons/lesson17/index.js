const about1car = {
  manufacturer: "volvo",
  model: "some_model",
  year: 2000,
  avg_speed: 80,
  fuel_tank_capacity: 61,
  current_fuel_level: '',
  avg_per_100km: 5,
  driver: '',
};

const about2car = {
  manufacturer: "volvo",
  model: "some_model",
  year: 2000,
  avg_speed: 80,
  fuel_tank_capacity: 61,
  current_fuel_level: '',
  avg_per_100km: 5,
  driver: '',
};

console.log(about1car);
console.log(about2car);

about1car.driver = 'Ivan';
about2car.driver = 'Vasylko';

function driverCheck () {
if (about1car.driver == 'Ivan') 
    {console.log('This driver allowed to drive')}
    else
    {console.log('This driver NOT allowed to drive')};


if (about2car.driver == 'Vasyl') 
    {console.log('This driver allowed to drive')}
    else
    {console.log('This driver NOT allowed to drive')};

  };

driverCheck();

about1car.current_fuel_level = 5;
about2car.current_fuel_level = 53;

function fuelCheck ()
{
  if (about1car.current_fuel_level <= 5)
  {console.log('Need more fuel')}
  else
  {console.log('Enought fuel, keep on driving')}

  if (about2car.current_fuel_level <= 5)
  {console.log('Need more fuel')}
  else
  {console.log('Enought fuel, keep on driving')}
};

fuelCheck();