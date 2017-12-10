
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaGenericXsltSyndicationFeed, KalturaGenericXsltSyndicationFeedArgs } from './KalturaGenericXsltSyndicationFeed';

export interface KalturaConstantXsltSyndicationFeedArgs  extends KalturaGenericXsltSyndicationFeedArgs {
    
}


export class KalturaConstantXsltSyndicationFeed extends KalturaGenericXsltSyndicationFeed {

    

    constructor(data? : KalturaConstantXsltSyndicationFeedArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConstantXsltSyndicationFeed' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaConstantXsltSyndicationFeed',KalturaConstantXsltSyndicationFeed);
