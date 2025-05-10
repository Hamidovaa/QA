
from calculator import Calculator

calc = Calculator()

def test_add():
    assert calc.add(3, 5) == 8

def test_subtract():
    assert calc.subtract(10, 4) == 6

def test_multiply():
    assert calc.multiply(2, 3) == 6

def test_divide():
    assert calc.divide(10, 2) == 5

def test_divide_by_zero():
    with pytest.raises(ValueError):
        calc.divide(10, 0)
