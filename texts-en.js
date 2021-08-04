texts = {
  EEB_gen :
      `<h1> The Earth Energy Balance </h1>
      This model only has one box, representing the energy (per area unit) contained in the Earth. Energy comes from the Sun in the form of light. A fraction of it is reflected back to space due to the reflective parts of Earth (mostly ice and clouds). The rest of the energy is absorbed by the Earth, warming it. Any warm body emits infrared radiation, which means energy leaving the planet. The system reaches an equilibrium when the energy coming in equals the energy coming out. The temperature of the planet is proportional to the thermal energy it contains.`,

  EEB_mat :
      `<h1> The Earth Energy Balance (M)</h1>
      The total energy entering the Earth is the solar emissivity (L) multiplied by the cross-sectional area of the Earth ($\pi R^2$). The albedo is the fraction coefficient of the energy that gets reflected by ice and clouds. The energy emitted by a warm body at temperature $T$ is given by the Stefan-Boltzmann equation, $E_out = \epsilon \sigma T^4$, in this case, multiplied by the area of the Earth ($4\pi R^2). The value $\epsilon$ is the absorptivity of the body (1 for the solid Earth), and $\sigma$ is a physical constant. We normalize the quantities by dividing all terms by the surface area of the Earth.`,

  IAF_gen :
      `<h1> The Ice-Albedo Feedback </h1>
      We refine the previous model by introducing a relation between temperature and albedo (reflected energy). The albedo depends basically on the amount of ice in the poles and glaciers, and the amount of ice depends on the global temperature. If the Earth gets colder, the ice increases, which in turn increases the amount of reflected energy, making the planet even colder. If the Earth gets warmer, the ice melts, then the planet absorbs more energy, making it warmer. This is an amplification feedback.`,

  IAF_mat :
      `<h1> The Ice-Albedo Feedback (M)</h1>
      For simplicity, here we assume an affine relationship between temperature and albedo, obtained by linear regression of experimental data.

      The feedback makes the system have memory. Change the value of L and watch the L-T graph moving. The temperature of the planet does not depend only on the energy balance, but also on the historic values it had before. Reversing the tendency is much harder. This effect is called hysteresis.`,

  GHE_gen :
      `<h1> The Greenhouse Effect </h1>
      This model has two boxes to represent the Earth: the ground and the atmosphere. The visible light from the Sun goes across the atmosphere and reaches the ground. When the warm ground emits infrared light, part of it gets absorbed by the atmosphere which, in turn, gets warm and emits infrared radiation both to the ground and to the space. This acts as an energy trap, making the ground warmer than the atmosphere. The amount of infrared light that the atmosphere can absorb and emit depends on its composition. Adding CO_2 to the atmosphere makes it more opaque to infrared, which increases this Greenhouse effect.

      Unlike the previous two theoretical examples, this third model is quite realistic and has been tuned with real values.`,

  GHE_mat :
    `<h1> The Greenhouse Effect (M)</h1>
    The Stefan-Boltzmann law ($E_out = \epsilon \sigma T^4$) applies to the ground and to the atmosphere, with the difference that $\epsilon$ is 1 for the ground (opaque body) and it is between 0 and 1 for the atmosphere, linked to the CO_2 amount (and other greenhouse gases) present in the air.
    Note that the relationship between CO_2 and epsilon is logarithmic. This means that doubling the amount of gas has always the same effect, independently of the absolute amount (this is called saturation). CO_2 is naturally present in the atmosphere, which helps us because fossil fuels emissions are massive. However, other greenhouse gases (such as methane) are not naturally present in the atmosphere and smaller emissions have a bigger impact than the same amount of CO2.`





};
