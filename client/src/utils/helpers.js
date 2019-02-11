export default {
    
    calculateCostRating: (costRatings) => {
        let costAverage = 0;
        
        if (costRatings.length) {
            let sum = 0;
            
            costRatings.forEach(costRating => {
                sum += costRating.costRating;
            });

            costAverage =  sum / costRatings.length;
        }

        return costAverage;
    }, 

    calculateQualityRating: (qualityRatings) => {
        let qualityAverage = 0;
        
        if (qualityRatings.length) {
            let sum = 0;
            
            qualityRatings.forEach(qualityRating => {
                sum += qualityRating.quality;
            });

            qualityAverage =  sum / qualityRatings.length;
        }

        return qualityAverage;
    }
}