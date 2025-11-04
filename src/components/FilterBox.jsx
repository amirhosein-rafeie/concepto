import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Slider,
  Switch,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DomainIcon from "@mui/icons-material/Domain";
import { useDispatch, useSelector } from "react-redux";
import { updateFilter, clearFilters } from "../redux/filterSlice";

export default function FilterBox() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filter.filters);

  const inputs = [
    {
      key: "name",
      label: "توصیف کلمات کلیدی",
      placeholder: "دیجی‌کالا، اسنپ و ...",
    },
    {
      key: "location",
      label: "مکان دفتر مرکزی شرکت‌ها",
      placeholder: "تهران، شیراز، اصفهان ...",
    },
    {
      key: "companyType",
      label: "نوع شرکت‌ها",
      placeholder: "خصوصی، عمومی ...",
    },
    { key: "industry", label: "صنعت", placeholder: "گیمینگ، نرم‌افزار ..." },
    {
      key: "similar",
      label: "جستجو در میان شرکت‌های مشابه",
      placeholder: "...",
    },
    { key: "tech", label: "تکنولوژی", placeholder: "اندروید، کلود، ..." },
  ];

  return (
    <div
      className="bg-white rounded-2xl shadow-sm p-5 flex flex-col gap-3 mr-20 font-bold"
      style={{ width: 392, height: 897 }}
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <DomainIcon className="text-gray-600" />
          <Typography variant="h6" className="text-gray-700">
            همه‌ی فیلترها
          </Typography>
        </div>
        <button
          onClick={() => dispatch(clearFilters())}
          className="text-blue-600 text-sm hover:underline"
        >
          حذف همه‌ی فیلترها
        </button>
      </div>

      {inputs.map((item) => (
        <Accordion key={item.key} disableGutters elevation={0} square>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-gray-500" />}
            sx={{
              backgroundColor: "#f9f9f9",
              borderRadius: 2,
              minHeight: 48,
              "&.Mui-expanded": { minHeight: 48 },
              "& .MuiAccordionSummary-content": { margin: "12px 0" },
            }}
          >
            <Typography className="text-gray-700">{item.label}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 0 }}>
            <TextField
              size="small"
              placeholder={item.placeholder}
              value={filters[item.key]}
              onChange={(e) =>
                dispatch(
                  updateFilter({ field: item.key, value: e.target.value })
                )
              }
              fullWidth
              sx={{
                marginTop: 1,
                "& .MuiInputBase-root": {
                  borderRadius: 2,
                  backgroundColor: "#f0f0f0",
                  height: 40,
                },
                "& .MuiOutlinedInput-input": {
                  padding: "10px 14px",
                },
              }}
            />
          </AccordionDetails>
        </Accordion>
      ))}

      <div className="flex flex-col gap-2 mt-3 font-bold">
        <Typography className="text-gray-700">تعداد کارمندان</Typography>
        <Slider
          value={filters.employees}
          onChange={(e, v) =>
            dispatch(updateFilter({ field: "employees", value: v }))
          }
          min={0}
          max={100}
          valueLabelDisplay="auto"
          sx={{
            color: "#1976d2",
            "& .MuiSlider-thumb": {
              height: 16,
              width: 20,
            },
            "& .MuiSlider-track": {
              height: 6,
            },
            "& .MuiSlider-rail": {
              height: 6,
              backgroundColor: "#e0e0e0",
            },
          }}
        />
      </div>

      <div className="flex justify-between items-center mt-2">
        <Typography className="text-gray-700 font-bold">
          فقط شرکت‌های خصوصی
        </Typography>
        <Switch
          checked={filters.privateOnly}
          onChange={(e) =>
            dispatch(
              updateFilter({ field: "privateOnly", value: e.target.checked })
            )
          }
          sx={{
            "& .MuiSwitch-thumb": {
              color: "#1976d2",
            },
            "& .MuiSwitch-track": {
              backgroundColor: "#1976d2",
            },
          }}
        />
      </div>
    </div>
  );
}
