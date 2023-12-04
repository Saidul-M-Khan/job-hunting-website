import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import bg1 from "../../assets/images/bg1.png";
import bg2 from "../../assets/images/bg2.png";

const data = [
  { Name: "Frontend Developer", "Available Job": 60 },
  { Name: "Backend Developer", "Available Job": 65 },
  { Name: "UI Designer", "Available Job": 25 },
  { Name: "UX Researcher", "Available Job": 45 },
  { Name: "Graphics Designer", "Available Job": 29 },
  { Name: "DevOps Engineer","Available Job": 15 },
  { Name: "Penetration Tester", "Available Job": 35 },
  { Name: "QA Engineer", "Available Job": 55 },
];

const Statistics = () => {
  return (
    <>
      <div>
        <div className="w-full bg-cover bg-center bg-purple-50">
          <div className="flex h-full w-full bg-purple-50 sm:flex-col">
            <div>
              <img src={bg2} alt="" className="w-48 ms-4 float-right" />
            </div>

            <div className="text-center flex justify-center items-center lg:p-10">
              <h1 className="text-dark lg:text-3xl sm:text-lg font-bold md:text-2xl dark:text-black">
                Statistics
              </h1>
            </div>

            <div>
              <img src={bg1} alt="" className="w-48 me-4 overflow-hidden" />
            </div>
          </div>
        </div>

        <div className="my-10 flex justify-center sm:w-[100] sm:h-[440]">
          <ResponsiveContainer width="100%" height={440}>
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="Available Job"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default Statistics;
