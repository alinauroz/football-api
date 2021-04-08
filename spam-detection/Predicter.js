class PredictSpam {

    constructor (samples) {
        this.positiveBag = {};
        this.negativeBag = {};
        this.nPositiveSamples = 0;
        this.nNegativeSamples = 0;

        samples.forEach(sample => {
            
            let tokens = sample.content.split(' ').map(token => token.toLowerCase());
            tokens.forEach(token => {
                this.setCount('inc', { word: token, negative: !sample.isSpam });
            });

            if (sample.isSpam) {
                this.nPositiveSamples ++;
            }
            else {
                this.nNegativeSamples ++;
            }

        });

    }
    
    setCount (action, payload) {
        let bag = payload.negative ? this.negativeBag: this.positiveBag;
        if (action === 'inc') {
            if (bag[payload.word])
                bag[payload.word]++;
            else
                bag[payload.word] = 1;
        }
        else if (action === 'set') {
            bag[payload.word] = payload.count;
        }
    }

    getCount (word, negative=false, defaultValue = 1) {
        let bag = negative ? this.negativeBag: this.positiveBag;
        return bag[word] || defaultValue;
    }

    get count() {
        return { 
            pb: this.positiveBag, 
            nb: this.negativeBag, 
            ns: this.nNegativeSamples, 
            ps:  this.nPositiveSamples
        }
    }

    predict () {

    }
};

const samples = [
    {content: "Win win win", isSpam: true},
    {content: "Play with us", isSpam: false},
    {content: "Get a chance to win 100", isSpam: true}
]

let predictor = new PredictSpam(samples);
console.log(predictor.count)